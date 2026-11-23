/**
 * Superfície de vidro (glassmorphism) padrão da landing page.
 * Precisa de algo colorido atrás (luzes em degradê) para o desfoque aparecer.
 */
export const glassPanel =
  "relative isolate overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl " +
  "shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08),0_24px_48px_-24px_rgb(0_0_0/0.7)]";

/** Reflexo de luz na borda superior do vidro. */
export function GlassSheen() {
  return (
    <span
      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      aria-hidden="true"
    />
  );
}

const glowTones = {
  blue: "from-blue-600/30 to-sky-400/10",
  sky: "from-sky-500/25 to-blue-600/10",
};

/** Luz azul em degradê para colocar atrás de painéis de vidro (posição/tamanho via className). */
export function GlassGlow({ tone = "blue", className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 rounded-full bg-linear-to-tr ${glowTones[tone]} blur-[90px] ${className}`}
      aria-hidden="true"
    />
  );
}
