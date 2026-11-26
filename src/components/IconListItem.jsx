/** Item de lista com ícone linear em um pequeno quadro translúcido. */
export default function IconListItem({ icon: Icon, children }) {
  return (
    <li className="flex items-center gap-3 text-[15px] leading-snug text-slate-700">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
        <Icon className="size-4 text-blue-600" strokeWidth={1.75} aria-hidden="true" />
      </span>
      {children}
    </li>
  );
}
