/** Monograma JN em SVG — o mesmo desenho de /public/logo.svg. */
export function LogoMark({ className = "size-9" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#2563EB" />
      <path
        d="M15 11v11.5a5 5 0 0 1-5 5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 29V11l10 18V11"
        stroke="#BFDBFE"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[-0.01em] text-white">
          JN Soluções
        </span>
        <span className="mt-1 text-[13px] text-slate-400">Tecnológicas</span>
      </span>
    </span>
  );
}
