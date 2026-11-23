import { ArrowUpRight } from "lucide-react";
import { GlassSheen, glassPanel } from "./glass";
import IconListItem from "./IconListItem";
import WhatsAppLink from "./WhatsAppLink";

/** Card em glassmorphism: fundo translúcido + desfoque das luzes da seção atrás dele. */
export default function ServiceCard({ service }) {
  const { id, icon: Icon, title, description, items, cta, message } = service;

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${glassPanel} flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7`}
    >
      <GlassSheen />

      <span className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/25">
        <Icon className="size-6 text-blue-300" strokeWidth={1.5} aria-hidden="true" />
      </span>

      <h3 id={`${id}-title`} className="mt-5 text-xl leading-snug font-bold text-white">
        {title}
      </h3>
      <p className="mt-3 leading-relaxed text-slate-400">{description}</p>

      <ul className="mt-5 space-y-2.5 border-t border-white/[0.08] pt-5">
        {items.map(({ label, icon }) => (
          <IconListItem key={label} icon={icon}>
            {label}
          </IconListItem>
        ))}
      </ul>

      <WhatsAppLink
        message={message}
        className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-semibold text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
      >
        {cta}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </WhatsAppLink>
    </article>
  );
}
