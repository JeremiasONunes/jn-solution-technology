import BenefitCard from "../components/BenefitCard";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { benefits } from "../data/company";

export default function Benefits() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="relative py-16 sm:py-20">
      <Container>
        <SectionTitle
          id="diferenciais-title"
          align="center"
          title="Por que escolher a JN?"
          description="Atendimento próximo, orientação honesta e capacidade técnica para cuidar do que você precisa."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={index * 90}>
              <BenefitCard benefit={benefit} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
