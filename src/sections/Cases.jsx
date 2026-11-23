import CaseCard from "../components/CaseCard";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { cases } from "../data/cases";

export default function Cases() {
  return (
    <section id="cases" aria-labelledby="cases-title" className="relative py-16 sm:py-20 lg:py-16">
      <Container>
        <SectionTitle
          id="cases-title"
          title="Soluções que já estão em operação."
          description="Conheça na prática algumas soluções digitais desenvolvidas pela JN."
        />

        <ul className="mt-10 space-y-8">
          {cases.map((item, index) => (
            <Reveal as="li" key={item.id}>
              <CaseCard item={item} reversed={index % 2 === 1} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
