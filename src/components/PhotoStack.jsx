import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 5500; // ritmo calmo: tempo de olhar cada foto
const SWIPE_DISTANCE = 70; // px arrastados para trocar de foto
const SWIPE_VELOCITY = 0.5; // px/ms: um gesto rápido também troca…
const FLICK_MIN_DISTANCE = 40; // …desde que percorra uma distância mínima

// Curva longa e macia (desacelera suavemente, sem "tranco" no fim)
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
const MOVE_MS = 1100;
const FADE_MS = 1400; // a opacidade termina depois do movimento: a foto "se revela" ao chegar

/*
 * Leque de 3 fotos. Posição 0 = frente; 1 = atrás à direita (próxima);
 * 2 = atrás à esquerda (anterior). As de trás ficam menores, inclinadas e
 * translúcidas, deixando o fundo do site aparecer através delas.
 */
const BACK = { x: 24, y: 3, rotate: 6, scale: 0.8, opacity: 0.38 };

function cardStyle(position, dx, width) {
  // progresso do arraste (0–1): a foto que vai entrar cresce e ganha opacidade junto
  const progress = Math.min(Math.abs(dx) / Math.max(width * 0.6, 1), 1);
  const incoming = (position === 1 && dx < 0) || (position === 2 && dx > 0);

  if (position === 0) {
    return {
      transform: `translate3d(${dx}px, 0, 0) rotate(${dx / 30}deg)`,
      opacity: 1 - progress * 0.35,
      zIndex: 30,
    };
  }

  const side = position === 1 ? 1 : -1;
  const p = incoming ? progress : 0;
  return {
    transform: `translate3d(${side * BACK.x * (1 - p)}%, ${BACK.y * (1 - p)}%, 0) rotate(${
      side * BACK.rotate * (1 - p)
    }deg) scale(${BACK.scale + (1 - BACK.scale) * p})`,
    opacity: BACK.opacity + (1 - BACK.opacity) * p,
    zIndex: incoming ? 25 : 20 - position,
  };
}

/**
 * Baralho de fotos em leque: gira sozinho em ritmo calmo, com movimento e
 * transparência suaves. Também aceita arraste (mouse/toque) e as setas do teclado.
 * O giro pausa com o mouse em cima, com foco, durante o arraste, com a aba oculta
 * e não acontece para quem prefere movimento reduzido.
 */
export default function PhotoStack({ photos, label, sizes }) {
  const [index, setIndex] = useState(0);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [announce, setAnnounce] = useState(false);
  const [width, setWidth] = useState(0); // largura do palco, medida ao começar o arraste
  const stageRef = useRef(null);
  const start = useRef(null);
  const total = photos.length;

  // navegação manual (arraste/teclado): também passa a anunciar a foto atual
  const go = (step) => {
    setIndex((current) => (current + step + total) % total);
    setAnnounce(true);
  };

  // Preferência de movimento reduzido e visibilidade da aba
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReducedMotion(motion.matches);
      setPageHidden(document.hidden);
    };
    sync();
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  // Giro automático: reinicia a contagem a cada troca (inclusive manual)
  const paused = hovered || focused || dragging || pageHidden || reducedMotion;
  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, total]);

  const onPointerDown = (event) => {
    if (event.button !== 0) return;
    start.current = { x: event.clientX, time: performance.now() };
    event.currentTarget.setPointerCapture(event.pointerId);
    setWidth(stageRef.current.offsetWidth);
    setDragging(true);
  };

  const onPointerMove = (event) => {
    if (start.current) setDx(event.clientX - start.current.x);
  };

  const endDrag = (event) => {
    if (!start.current) return;
    const distance = event.clientX - start.current.x;
    const velocity = distance / Math.max(performance.now() - start.current.time, 1);
    const flick = Math.abs(distance) >= FLICK_MIN_DISTANCE && Math.abs(velocity) > SWIPE_VELOCITY;
    if (distance < -SWIPE_DISTANCE || (flick && distance < 0)) go(1);
    else if (distance > SWIPE_DISTANCE || (flick && distance > 0)) go(-1);
    start.current = null;
    setDragging(false);
    setDx(0);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label={`${label}. Arraste para os lados ou use as setas do teclado.`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="rounded-[24px] outline-offset-8"
    >
      {/* espaço lateral para as fotos de trás aparecerem dos dois lados */}
      <div className="px-[14%] py-[4%]">
        <div ref={stageRef} className="relative aspect-[1024/572]">
          {photos.map((photo, i) => {
            const position = (i - index + total) % total;
            const isFront = position === 0;
            const { transform, opacity, zIndex } = cardStyle(position, isFront || dragging ? dx : 0, width);
            return (
              <figure
                key={photo.id}
                aria-hidden={!isFront}
                onPointerDown={isFront ? onPointerDown : undefined}
                onPointerMove={isFront ? onPointerMove : undefined}
                onPointerUp={isFront ? endDrag : undefined}
                onPointerCancel={isFront ? endDrag : undefined}
                data-allow-fade
                style={{
                  transform,
                  opacity,
                  zIndex,
                  // movimento reduzido: só o fade de opacidade, sem deslocamento
                  transition: dragging
                    ? "none"
                    : reducedMotion
                      ? `opacity 700ms ease`
                      : `transform ${MOVE_MS}ms ${EASE}, opacity ${FADE_MS}ms ${EASE}`,
                }}
                className={`absolute inset-0 m-0 overflow-hidden rounded-[20px] border-4 border-white bg-white shadow-[0_20px_25px_-5px_rgb(15_23_42/0.1),0_10px_10px_-5px_rgb(15_23_42/0.04)] ring-1 ring-slate-200/70 will-change-transform select-none ${
                  isFront ? "cursor-grab touch-pan-y active:cursor-grabbing" : "pointer-events-none"
                }`}
              >
                <img
                  src={photo.src}
                  srcSet={photo.srcSet}
                  sizes={sizes}
                  width="1024"
                  height="572"
                  draggable="false"
                  fetchPriority={i === 0 ? "high" : "low"}
                  decoding="async"
                  alt={photo.alt}
                  className="pointer-events-none size-full object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>

      {/* anuncia a foto atual só após interação, para não interromper a leitura a cada giro */}
      <p className="sr-only" aria-live={announce ? "polite" : "off"}>
        Foto {index + 1} de {total}: {photos[index].alt}
      </p>
    </div>
  );
}
