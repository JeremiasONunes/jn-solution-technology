const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap " +
  "transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] " +
  "focus-visible:outline-offset-4";

const variants = {
  // Ação principal: azul calmo com sombra difusa da mesma cor
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30",
  // Ação secundária: superfície branca com borda suave
  secondary:
    "border border-slate-200 bg-white text-slate-800 shadow-sm shadow-slate-900/5 hover:border-slate-300 hover:shadow-md",
  // Contorno fino: CTA discreto (header), não compete com a ação principal
  outline:
    "border border-blue-600/30 bg-white/60 text-blue-700 hover:border-blue-600/60 hover:bg-blue-50",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

/** Classes padronizadas para links e botões de ação. */
export function buttonClass({ variant = "primary", size = "md", className = "" } = {}) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}
