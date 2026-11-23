import {
  Code2,
  HeartHandshake,
  Layers,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

/** Escopo de atuação exibido no Hero (sem números inventados). */
export const heroHighlights = [
  "Atendimento residencial e empresarial",
  "Suporte técnico e desenvolvimento",
  "Contato direto pelo WhatsApp",
];

export const pillars = [
  {
    icon: ServerCog,
    title: "Infraestrutura de TI",
    description: "Manutenção, redes e suporte para manter tudo funcionando.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de software",
    description: "Sites, sistemas e automações sob medida para o seu negócio.",
  },
];

/** Etapas derivadas do compromisso institucional da empresa. */
export const workSteps = [
  {
    title: "Entender o cenário",
    description: "Ouvimos a sua necessidade e analisamos o contexto antes de propor qualquer solução.",
  },
  {
    title: "Propor caminhos viáveis",
    description: "Apresentamos opções claras, adequadas à sua realidade e ao seu momento.",
  },
  {
    title: "Entregar com cuidado",
    description: "Executamos com clareza, responsabilidade e atenção aos detalhes.",
  },
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Confiança e transparência",
    description:
      "Orientação clara, diagnóstico responsável e comunicação durante todo o atendimento.",
  },
  {
    icon: SlidersHorizontal,
    title: "Soluções sob medida",
    description:
      "Cada necessidade é analisada para encontrar a solução adequada ao seu cenário.",
  },
  {
    icon: Layers,
    title: "Tecnologia de ponta a ponta",
    description: "Suporte técnico e desenvolvimento de software em um só lugar.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description: "Cada cliente recebe atenção de acordo com a sua necessidade.",
  },
];
