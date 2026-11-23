/**
 * Ponto de encaixe da rolagem no topo de uma seção (a seção precisa ser `relative`).
 * Usar um marcador fino, em vez de `snap-start` na seção inteira, evita que seções
 * mais altas que a tela "cubram" a viewport — nesse caso o navegador ignora os
 * pontos de encaixe internos (cards) e a rolagem volta a parar no meio deles.
 */
export default function SnapPoint() {
  return <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px snap-start" />;
}
