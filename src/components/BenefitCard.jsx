export default function BenefitCard({ benefit }) {
  const { icon: Icon, title, description } = benefit;

  return (
    <div className="h-full border-t border-white/10 pt-6">
      <Icon className="size-6 text-blue-400" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
