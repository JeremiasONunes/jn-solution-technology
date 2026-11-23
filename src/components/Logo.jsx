export function LogoMark({ className = "size-9 object-contain" }) {
  return (
    <img
      src="/jn-logo-mark.png"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[-0.01em] text-white">
          JNunes Tech
        </span>
        <span className="mt-1 text-[13px] text-slate-400">Soluções</span>
      </span>
    </span>
  );
}
