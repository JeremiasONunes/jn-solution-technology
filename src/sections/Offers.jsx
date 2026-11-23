import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import { GlassSheen, glassPanel } from "../components/glass";
import TelegramIcon from "../components/icons/TelegramIcon";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";
import Reveal from "../components/Reveal";
import { communityLinks } from "../config/site";

const channelClass =
  "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl px-5 text-[15px] font-semibold whitespace-nowrap";

const channels = [
  {
    href: communityLinks.whatsappGroup,
    name: "WhatsApp",
    icon: WhatsAppIcon,
    activeClass: "bg-whatsapp text-ink shadow-lg shadow-whatsapp/15 hover:bg-whatsapp-strong",
    iconClass: "text-whatsapp",
  },
  {
    href: communityLinks.telegram,
    name: "Telegram",
    icon: TelegramIcon,
    activeClass: "bg-telegram text-ink shadow-lg shadow-telegram/15 hover:bg-telegram-strong",
    iconClass: "text-telegram",
  },
];

/**
 * Faixa dos grupos de ofertas. Enquanto `communityLinks.launched` for false,
 * mostra "Em breve" com os canais desativados (sem link).
 */
export default function Offers() {
  const { launched } = communityLinks;

  return (
    <section id="ofertas" aria-labelledby="ofertas-title" className="pb-24 sm:pb-28">
      <Container>
        <Reveal>
          <div
            className={`${glassPanel} flex flex-col gap-8 rounded-3xl p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10`}
          >
            <GlassSheen />
            <div>
              {!launched && (
                <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  Em breve
                </span>
              )}
              <h2
                id="ofertas-title"
                className={`text-2xl leading-tight font-bold tracking-[-0.01em] text-white sm:text-[1.75rem] ${
                  launched ? "" : "mt-4"
                }`}
              >
                Ofertas com ótimo preço, direto no seu celular.
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-slate-400">
                {launched
                  ? "Entre no nosso grupo e receba promoções de produtos selecionados. É gratuito e você sai quando quiser."
                  : "Estamos preparando grupos de ofertas no WhatsApp e no Telegram para você receber promoções de produtos selecionados. Em breve por aqui."}
              </p>
            </div>

            <ul className="flex shrink-0 flex-col gap-3 sm:flex-row lg:w-80 lg:flex-col">
              {channels.map(({ href, name, icon: Icon, activeClass, iconClass }) => (
                <li key={name} className="flex-1">
                  {launched ? (
                    <ExternalLink
                      href={href}
                      className={`${channelClass} ${activeClass} transition duration-200 ease-out active:scale-[0.98]`}
                    >
                      <Icon className="size-5" />
                      Entrar no grupo do {name}
                    </ExternalLink>
                  ) : (
                    <span
                      aria-disabled="true"
                      className={`${channelClass} cursor-not-allowed border border-white/10 bg-white/[0.03] text-slate-400`}
                    >
                      <Icon className={`size-5 opacity-60 ${iconClass}`} />
                      Grupo no {name}
                      <span className="text-xs font-normal text-slate-500">· em breve</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
