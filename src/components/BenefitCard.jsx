export default function BenefitCard({ benefit }) {
  const { icon: Icon, title, description } = benefit;

  return (
    <div className="h-full border-t border-slate-200 pt-6">
      <Icon className="size-6 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
