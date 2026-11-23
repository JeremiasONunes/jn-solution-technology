import Container from "../components/Container";
import { GlassGlow } from "../components/glass";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-16"
    >
      <Container>
        <SectionTitle
          id="servicos-title"
          title="A tecnologia da sua rotina, em boas mãos."
          description="Do equipamento que você usa todos os dias aos sistemas que movem o seu negócio: suporte técnico e desenvolvimento com o mesmo cuidado."
        />

        <div className="relative mt-10">
          {/* luzes em degradê que o vidro dos cards desfoca */}
          <GlassGlow className="top-1/4 -left-24 size-[26rem]" />
          <GlassGlow tone="sky" className="-right-24 bottom-0 size-[22rem]" />

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                as="li"
                key={service.id}
                delay={index * 100}
                className={index === services.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}
              >
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
