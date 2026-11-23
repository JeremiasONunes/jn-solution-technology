import { getNeed, getRecommendation } from "../../data/chatbot";

function SummaryRow({ label, children }) {
  return (
    <div>
      <dt className="text-xs text-slate-500">{label}</dt>
      <dd className="mt-0.5 text-sm break-words whitespace-pre-line text-slate-200">{children}</dd>
    </div>
  );
}

/** Cartão de resumo com a solução indicada para o cliente. */
export default function ChatSummary({ lead }) {
  const need = getNeed(lead.needId);
  const { icon: Icon, title, description } = getRecommendation(lead.needId);

  return (
    <div className="w-full overflow-hidden rounded-2xl rounded-tl-md border border-white/10 bg-gray-800/60">
      <dl className="space-y-3 p-4">
        <SummaryRow label="Nome">{lead.name}</SummaryRow>
        <SummaryRow label="Necessidade">{need?.label}</SummaryRow>
        <SummaryRow label="Descrição">{lead.description}</SummaryRow>
      </dl>
      <div className="flex gap-3 border-t border-blue-400/15 bg-blue-500/[0.08] p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs text-blue-300">
            Solução indicada
          </p>
          <p className="mt-0.5 text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
