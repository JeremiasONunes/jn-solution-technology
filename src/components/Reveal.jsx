import { useInView } from "../hooks/useInView";

/**
 * Entrada progressiva ao rolar a página. A animação é definida em globals.css
 * e desativada automaticamente com `prefers-reduced-motion`.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-reveal={inView ? "visible" : "hidden"}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
