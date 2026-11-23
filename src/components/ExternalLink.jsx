/** Link externo padrão: nova aba, atributos de segurança e aviso para leitores de tela. */
export default function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (abre em uma nova aba)</span>
    </a>
  );
}
