import desenvolvimento1024 from "../assets/images/hero-desenvolvimento-1024.webp";
import desenvolvimento640 from "../assets/images/hero-desenvolvimento-640.webp";
import infraestrutura1024 from "../assets/images/hero-infraestrutura-1024.webp";
import infraestrutura640 from "../assets/images/hero-infraestrutura-640.webp";
import manutencao1024 from "../assets/images/hero-manutencao-1024.webp";
import manutencao640 from "../assets/images/hero-manutencao-640.webp";
import { siteConfig } from "../config/site";

/** Fotos do baralho do Hero, na ordem em que aparecem (a primeira fica na frente). */
export const heroPhotos = [
  {
    id: "manutencao",
    src: manutencao1024,
    srcSet: `${manutencao640} 640w, ${manutencao1024} 1024w`,
    alt: `Técnico da ${siteConfig.name} instalando componentes em um computador, em bancada com ferramentas, memórias e SSDs`,
  },
  {
    id: "desenvolvimento",
    src: desenvolvimento1024,
    srcSet: `${desenvolvimento640} 640w, ${desenvolvimento1024} 1024w`,
    alt: `Técnico da ${siteConfig.name} programando em uma estação de trabalho com dois monitores e um notebook`,
  },
  {
    id: "infraestrutura",
    src: infraestrutura1024,
    srcSet: `${infraestrutura640} 640w, ${infraestrutura1024} 1024w`,
    alt: `Técnico da ${siteConfig.name} organizando cabos de rede em um rack com switches e patch panel`,
  },
];
