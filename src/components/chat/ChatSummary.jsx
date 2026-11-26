import { getNeed, getRecommendation } from "../../data/chatbot";

function SummaryRow({ label, children }) {
  return (
    <div>
      <dt className="text-xs text-slate-500">{label}</dt>
      <dd className="mt-0.5 text-sm break-words whitespace-pre-line text-slate-700">{children}</dd>
    </div>
  );
}

/** Cartão de resumo com a solução indicada para o cliente. */
export default function ChatSummary({ lead }) {
  const need = getNeed(lead.needId);
  const { icon: Icon, title, description } = getRecommendation(lead.needId);

  return (
    <div className="w-full overflow-hidden rounded-2xl rounded-tl-md border border-slate-200 bg-slate-50">
      <dl className="space-y-3 p-4">
        <SummaryRow label="Nome">{lead.name}</SummaryRow>
        <SummaryRow label="Necessidade">{need?.label}</SummaryRow>
        <SummaryRow label="Descrição">{lead.description}</SummaryRow>
      </dl>
      <div className="flex gap-3 border-t border-blue-100 bg-blue-50/70 p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs text-blue-600">
            Solução indicada
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
