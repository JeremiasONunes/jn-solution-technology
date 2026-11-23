import { Code2, MessageSquareMore, Network, Wrench } from "lucide-react";
import { siteConfig } from "../config/site";
import { services } from "./services";

/** Roteiro do assistente de pré-atendimento. Todos os textos ficam aqui. */

export const chatLimits = {
  name: { min: 2, max: 60 },
  description: { min: 10, max: 500 },
};

export const chatNeeds = [
  {
    id: "manutencao",
    label: "Manutenção de computador",
    icon: Wrench,
    prompt: "Entendi. O que está acontecendo com o seu equipamento?",
    placeholder: "Ex.: meu notebook está lento e esquentando muito.",
  },
  {
    id: "infraestrutura",
    label: "Infraestrutura de TI",
    icon: Network,
    prompt: "Certo! Conte um pouco sobre o ambiente da sua empresa e o que precisa.",
    placeholder: "Ex.: precisamos organizar a rede e os computadores do escritório.",
  },
  {
    id: "desenvolvimento",
    label: "Site, sistema ou automação",
    icon: Code2,
    prompt: "Ótimo! O que você imagina para o seu projeto?",
    placeholder: "Ex.: quero um site para apresentar minha empresa e receber contatos.",
  },
  {
    id: "outro",
    label: "Outro assunto",
    icon: MessageSquareMore,
    prompt: "Sem problemas. Descreva brevemente o que você precisa.",
    placeholder: "Ex.: preciso de orientação para escolher um computador.",
  },
];

export const getNeed = (id) => chatNeeds.find((need) => need.id === id);

const fallbackRecommendation = {
  title: "Atendimento personalizado",
  description: "Nossa equipe vai analisar o seu caso e indicar o caminho mais adequado.",
  icon: MessageSquareMore,
};

/** Solução indicada a partir da necessidade escolhida (reaproveita os dados de serviços). */
export function getRecommendation(needId) {
  const service = services.find((item) => item.id === needId);
  if (!service) return fallbackRecommendation;
  return { title: service.title, description: service.description, icon: service.icon };
}

export const firstName = (name) => name.trim().split(/\s+/)[0];

export const chatCopy = {
  greeting: [
    `Olá! Sou o assistente virtual da ${siteConfig.name}.`,
    "Vou preparar o seu atendimento em três passos rápidos. Para começar, como posso te chamar?",
  ],
  askNeed: (name) => `Prazer, ${firstName(name)}! Qual destas opções descreve melhor o que você precisa?`,
  summary: "Perfeito! Este é o resumo do seu atendimento:",
  sent: (name) =>
    `Pronto, ${firstName(name)}! Abrimos o WhatsApp em uma nova aba com o seu resumo. É só tocar em enviar por lá.`,
};

/** Mensagem que chega ao WhatsApp da empresa (formatação *negrito* do WhatsApp). */
export function buildLeadMessage({ name, needId, description }) {
  const need = getNeed(needId);
  const recommendation = getRecommendation(needId);

  return [
    `Olá! Meu nome é ${name.trim()}.`,
    "",
    `*Necessidade:* ${need?.label ?? "Não informada"}`,
    `*Descrição:* ${description.trim()}`,
    `*Solução indicada:* ${recommendation.title}`,
    "",
    `Mensagem enviada pelo assistente do site da ${siteConfig.name}.`,
  ].join("\n");
}
