import { getWhatsAppLink } from "../config/site";

/** Link padrão para o WhatsApp: abre em nova aba com os atributos de segurança. */
export default function WhatsAppLink({ message, children, ...props }) {
  return (
    <a href={getWhatsAppLink(message)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}
