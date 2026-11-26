/**
 * Superfície de vidro (glassmorphism) clara, padrão da landing page.
 * Fica sobre as luzes suaves (GlassGlow), que aparecem desfocadas através dela.
 */
export const glassPanel =
  "relative isolate overflow-hidden border border-white/80 bg-white/70 backdrop-blur-xl " +
  "ring-1 ring-slate-200/70 shadow-[0_20px_25px_-5px_rgb(15_23_42/0.08),0_8px_10px_-6px_rgb(15_23_42/0.04)]";

/** Reflexo de luz na borda superior do vidro. */
export function GlassSheen() {
  return (
    <span
      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent"
      aria-hidden="true"
    />
  );
}

// Iluminação ambiente: azul-celeste (#E0F2FE) com um toque de lavanda (#EEF2FF)
const glowTones = {
  sky: "from-sky-200/70 to-indigo-100/60",
  lavender: "from-indigo-100/80 to-sky-100/60",
};

/** Luz difusa em degradê para colocar atrás de painéis (posição/tamanho via className). */
export function GlassGlow({ tone = "sky", className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 rounded-full bg-linear-to-tr ${glowTones[tone]} blur-[90px] ${className}`}
      aria-hidden="true"
    />
  );
}
