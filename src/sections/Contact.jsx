import { MessageCircle } from "lucide-react";
import { buttonClass } from "../components/buttonStyles";
import Container from "../components/Container";
import { GlassGlow, GlassSheen, glassPanel } from "../components/glass";
import Reveal from "../components/Reveal";
import WhatsAppLink from "../components/WhatsAppLink";
import { whatsappMessages } from "../config/site";
import { services } from "../data/services";

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate snap-start scroll-mt-6 overflow-x-clip pb-16 sm:scroll-mt-10 sm:pb-20"
    >
      <Container>
        <Reveal className="relative">
          <GlassGlow className="-top-10 -left-16 size-[24rem]" />
          <GlassGlow tone="sky" className="-right-16 -bottom-16 size-[20rem]" />

          <div className={`${glassPanel} rounded-3xl px-6 py-12 sm:px-12 sm:py-14 lg:px-14`}>
            <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
            <GlassSheen />

            <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <h2
                  id="contato-title"
                  className="text-3xl leading-tight font-bold tracking-[-0.01em] text-white sm:text-5xl"
                >
                  Sua próxima solução começa com uma conversa.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                  Conte o que você precisa. Vamos entender seu cenário e conversar sobre a melhor
                  solução para você ou sua empresa.
                </p>
              </div>

              <WhatsAppLink
                message={whatsappMessages.general}
                className={buttonClass({ size: "lg", className: "mt-10 w-full shrink-0 sm:w-auto lg:mt-0" })}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Chamar no WhatsApp
              </WhatsAppLink>
            </div>

            <div className="mt-12 border-t border-white/[0.08] pt-8">
              <p id="assuntos" className="text-sm text-slate-400">
                Prefere ir direto ao assunto?
              </p>
              <ul aria-labelledby="assuntos" className="mt-4 flex flex-wrap gap-2.5">
                {services.map(({ id, icon: Icon, title, message }) => (
                  <li key={id}>
                    <WhatsAppLink
                      message={message}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                    >
                      <Icon className="size-4 text-blue-300" strokeWidth={1.75} aria-hidden="true" />
                      {title}
                    </WhatsAppLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
