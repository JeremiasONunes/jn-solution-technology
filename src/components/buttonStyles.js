const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap " +
  "transition duration-200 ease-out active:scale-[0.98] focus-visible:outline-offset-4";

const variants = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:shadow-blue-500/35",
  secondary:
    "border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.07]",
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
