/**
 * Configuração central do site.
 * `whatsapp`: somente dígitos, no formato 55 + DDD + número.
 * `email` e `location` são opcionais: quando preenchidos, aparecem no rodapé.
 */
export const siteConfig = {
  name: "JNunes Tech Solution",
  description:
    "Infraestrutura de TI e desenvolvimento de soluções digitais para pessoas e empresas.",
  whatsapp: "5535998500813",
  email: "",
  location: "",
};

/**
 * Grupos de ofertas (lançamento futuro). Enquanto `launched` for false, a seção
 * mostra "Em breve" e os botões ficam desativados. Ao lançar, preencha os convites
 * reais e troque `launched` para true:
 *   WhatsApp: link de convite do grupo (https://chat.whatsapp.com/...)
 *   Telegram: link do grupo ou canal (https://t.me/...)
 */
export const communityLinks = {
  launched: false,
  whatsappGroup: "https://chat.whatsapp.com/SEU-CODIGO-DE-CONVITE",
  telegram: "https://t.me/SEU-GRUPO",
};

export const whatsappMessages = {
  general:
    "Olá! Acessei o site da JNunes Tech Solution e gostaria de conhecer melhor os serviços.",
  maintenance: "Olá! Gostaria de solicitar um atendimento para manutenção de computador.",
  infrastructure:
    "Olá! Gostaria de conversar sobre uma necessidade de infraestrutura de TI para minha empresa.",
  development: "Olá! Tenho interesse no desenvolvimento de um site ou sistema para minha empresa.",
  quote: "Olá! Gostaria de solicitar um orçamento com a JNunes Tech Solution.",
};

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "cases", label: "Cases" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export function getWhatsAppLink(message = whatsappMessages.general) {
  const phone = siteConfig.whatsapp;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
