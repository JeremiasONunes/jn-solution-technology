import aboutImage from "../assets/images/sobre-tecnologia.webp";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import SnapPoint from "../components/SnapPoint";
import { pillars, workSteps } from "../data/company";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative border-y border-white/[0.05] bg-ink-soft py-16 sm:py-20 lg:py-16"
    >
      <SnapPoint />

      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionTitle
            id="sobre-title"
            title="Mais do que tecnologia. Parceria para evoluir."
          />

          <Reveal delay={100} className="mt-6 space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            <p>
              A <strong className="font-semibold text-white">JN Soluções Tecnológicas</strong> nasceu
              para aproximar pessoas e empresas de soluções tecnológicas práticas e eficientes.
            </p>
            <p>
              Unimos conhecimento em infraestrutura de TI e desenvolvimento de software para atender
              necessidades do dia a dia e desafios de negócio.
            </p>
          </Reveal>

          <Reveal delay={180} as="ul" className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, description }) => (
              <li key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <Icon className="size-6 text-blue-400" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{description}</p>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="max-lg:snap-start max-lg:scroll-mt-4">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/[0.08]">
            <img
              src={aboutImage}
              width="437"
              height="300"
              loading="lazy"
              decoding="async"
              alt="Profissional trabalhando em um notebook, com elementos gráficos de tecnologia sobrepostos"
              className="size-full object-cover"
            />
            {/* degradê integra a foto ao fundo escuro */}
            <div
              className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-blue-600/15"
              aria-hidden="true"
            />
          </figure>

          {/* Cartão sobreposto à base da foto */}
          <div className="relative mx-3 -mt-16 rounded-3xl border border-white/[0.08] bg-gray-900 p-6 sm:mx-6 sm:-mt-20 sm:p-7">
            <h3 className="text-sm font-semibold text-blue-400">
              Nosso compromisso
            </h3>
            <p className="mt-3 font-display text-xl leading-snug font-bold text-white">
              Entender cada cenário, propor caminhos viáveis e entregar soluções com clareza,
              responsabilidade e atenção aos detalhes.
            </p>

            <ol className="mt-6 space-y-5">
              {workSteps.map(({ title, description }, index) => (
                <li key={title} className="relative flex gap-5">
                  {index < workSteps.length - 1 && (
                    <span
                      className="absolute top-11 bottom-[-1rem] left-[1.1875rem] w-px bg-white/10"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 font-display text-sm font-bold text-blue-300 tabular-nums">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-white">{title}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-400">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
