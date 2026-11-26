import { ArrowUpRight, Check, Lock } from "lucide-react";
import { buttonClass } from "./buttonStyles";
import ExternalLink from "./ExternalLink";
import IconListItem from "./IconListItem";
import WhatsAppLink from "./WhatsAppLink";

/** Moldura de navegador que exibe a captura do projeto. */
function BrowserFrame({ url, image }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
        </span>
        <span className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-slate-600">
          <Lock className="size-3 shrink-0" aria-hidden="true" />
          <span className="truncate">{url}</span>
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="(min-width: 1024px) 40rem, calc(100vw - 4rem)"
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        alt={image.alt}
        className="block h-auto w-full bg-slate-100"
      />
    </div>
  );
}

/** `reversed` alterna a imagem para a direita no desktop, dando ritmo à lista de cases. */
export default function CaseCard({ item, reversed = false }) {
  const { id, name, category, tags, description, highlights, url, displayUrl, image, message } = item;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className={`relative isolate grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-5 sm:p-8 lg:gap-12 lg:p-10 ${
        reversed ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"
      }`}
    >
      {/* luz em degradê atrás da captura */}
      <div
        className={`pointer-events-none absolute -bottom-24 -z-10 size-[28rem] rounded-full bg-linear-to-tr from-sky-200/70 to-indigo-100/60 blur-[100px] ${
          reversed ? "-right-16" : "-left-16"
        }`}
        aria-hidden="true"
      />

      <div className={reversed ? "lg:order-2" : undefined}>
        <BrowserFrame url={displayUrl} image={image} />
      </div>

      <div>
        <p className="text-sm font-semibold text-blue-600">{category}</p>
        <h3 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-[-0.01em] text-slate-900 sm:text-4xl">
          {name}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tipo de projeto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-6 leading-relaxed text-slate-600">{description}</p>

        <ul className="mt-6 space-y-3">
          {highlights.map((highlight) => (
            <IconListItem key={highlight} icon={Check}>
              {highlight}
            </IconListItem>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ExternalLink href={url} className={buttonClass({ variant: "secondary", className: "group/link" })}>
            Visitar o site<span className="sr-only"> do {name}</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </ExternalLink>
          <WhatsAppLink message={message} className={buttonClass()}>
            Quero um projeto assim
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
