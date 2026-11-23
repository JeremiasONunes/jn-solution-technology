import { ArrowDown, MessageCircle } from "lucide-react";
import heroPhoto1024 from "../assets/images/hero-manutencao-1024.webp";
import heroPhoto640 from "../assets/images/hero-manutencao-640.webp";
import { buttonClass } from "../components/buttonStyles";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import WhatsAppLink from "../components/WhatsAppLink";
import { whatsappMessages } from "../config/site";
import { heroHighlights } from "../data/company";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate border-b border-white/[0.06]"
    >
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />

      <Container className="grid items-center gap-10 pt-24 pb-16 sm:pt-40 sm:pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pt-36 lg:pb-16">
        <div>
          <Reveal>
            <h1
              id="hero-title"
              className="text-[2.6rem] leading-[1.05] font-bold tracking-[-0.01em] text-white sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]"
            >
              Tecnologia que resolve. Soluções que fazem avançar.
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
              Da manutenção do seu computador ao desenvolvimento de sistemas para sua empresa. A JN
              conecta conhecimento técnico a soluções que funcionam.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink message={whatsappMessages.quote} className={buttonClass({ size: "lg" })}>
              <MessageCircle className="size-5" aria-hidden="true" />
              Solicitar orçamento
            </WhatsAppLink>
            <a href="#servicos" className={buttonClass({ variant: "secondary", size: "lg" })}>
              Conheça nossos serviços
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {heroHighlights.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative order-first lg:order-none">
          {/* luz em degradê atrás da foto */}
          <div
            className="absolute -inset-y-6 inset-x-0 -z-10 rounded-full bg-linear-to-tr sm:-inset-x-6 from-blue-600/30 to-sky-400/10 blur-[80px]"
            aria-hidden="true"
          />
          <figure className="relative aspect-[1024/572] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <img
              src={heroPhoto1024}
              srcSet={`${heroPhoto640} 640w, ${heroPhoto1024} 1024w`}
              sizes="(min-width: 1024px) 36rem, calc(100vw - 2.5rem)"
              width="1024"
              height="572"
              fetchPriority="high"
              decoding="async"
              alt="Técnico da JN Soluções Tecnológicas instalando componentes em um computador, em bancada com ferramentas, memórias e SSDs"
              className="size-full object-cover"
            />
            {/* degradê integra a foto ao fundo escuro */}
            <div
              className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-blue-600/10"
              aria-hidden="true"
            />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
