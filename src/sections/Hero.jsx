import { ArrowDown, MessageCircle } from "lucide-react";
import { buttonClass } from "../components/buttonStyles";
import Container from "../components/Container";
import { GlassGlow } from "../components/glass";
import PhotoStack from "../components/PhotoStack";
import Reveal from "../components/Reveal";
import WhatsAppLink from "../components/WhatsAppLink";
import { whatsappMessages } from "../config/site";
import { heroHighlights } from "../data/company";
import { heroPhotos } from "../data/heroPhotos";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-x-clip border-b border-slate-200/70"
    >
      {/* fundo: quadriculado sutil + iluminação ambiente difusa */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <GlassGlow className="-top-24 -left-32 size-[34rem]" />
      <GlassGlow tone="lavender" className="top-1/3 -right-24 size-[30rem]" />

      <Container
        className="grid items-center gap-12 pt-24 pb-16 sm:pt-36 sm:pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pt-40 lg:pb-24"
      >
        <div>
          <Reveal>
            <h1
              id="hero-title"
              className="max-w-[34rem] text-[2.35rem] leading-[1.08] font-bold tracking-[-0.02em] text-slate-900 sm:text-5xl xl:text-[3.25rem]"
            >
              Tecnologia <span className="text-blue-600">que resolve</span>. Soluções que{" "}
              <span className="text-blue-600">fazem avançar</span>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Da manutenção do seu computador ao desenvolvimento de sistemas para sua empresa. A JN
              conecta conhecimento técnico a soluções que funcionam.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink message={whatsappMessages.quote} className={buttonClass({ size: "lg" })}>
              <MessageCircle className="size-5" aria-hidden="true" />
              Solicitar orçamento
            </WhatsAppLink>
            <a href="#servicos" className={buttonClass({ variant: "secondary", size: "lg" })}>
              Conheça nossos serviços
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {heroHighlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5"
                >
                  <Icon className="size-4 text-blue-600" strokeWidth={1.75} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-first lg:order-none">
          <PhotoStack
            photos={heroPhotos}
            label="Fotos de atendimentos da JN"
            sizes="(min-width: 1280px) 27rem, (min-width: 1024px) 36vw, 64vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
