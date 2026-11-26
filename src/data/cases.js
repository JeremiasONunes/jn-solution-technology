import contaQueVai1600 from "../assets/images/case-contaquevai-1600.webp";
import contaQueVai560 from "../assets/images/case-contaquevai-560.webp";
import contaQueVai800 from "../assets/images/case-contaquevai-800.webp";
import restroGestao1600 from "../assets/images/case-restrogestao-1600.webp";
import restroGestao560 from "../assets/images/case-restrogestao-560.webp";
import restroGestao800 from "../assets/images/case-restrogestao-800.webp";

/**
 * Cases de desenvolvimento. Para adicionar um novo, inclua um objeto com a mesma forma.
 * Use apenas informações reais do projeto: sem métricas ou depoimentos não confirmados.
 */
export const cases = [
  {
    id: "restrogestao",
    name: "RestroGestão",
    category: "Desenvolvimento web",
    tags: ["Sistema web", "Restaurantes e food service"],
    description:
      "Sistema de gestão operacional para restaurantes e food service, que sincroniza salão, cozinha, mesas e gestão em uma única plataforma para reduzir erros e acelerar o atendimento durante o turno.",
    highlights: [
      "Atendimento integrado entre salão, mesas e pedidos",
      "Fila da cozinha com status e prioridade visíveis",
      "Visão de gestão em tempo real, durante o turno",
    ],
    url: "https://www.restrogestao.com.br",
    displayUrl: "restrogestao.com.br",
    image: {
      src: restroGestao800,
      srcSet: `${restroGestao560} 560w, ${restroGestao800} 800w, ${restroGestao1600} 1600w`,
      width: 1600,
      height: 819,
      alt: "Página inicial do RestroGestão com o título “Menos caos, mais controle da operação” e os ganhos para salão, cozinha e gestão",
    },
    message: "Olá! Vi o case RestroGestão no site da JN e gostaria de conversar sobre um projeto parecido.",
  },
  {
    id: "contaquevai",
    name: "Conta Que Vai",
    category: "Desenvolvimento web",
    tags: ["Plataforma web", "Educação"],
    description:
      "Plataforma de ensino de matemática que apresenta o Método ELC® e ajuda alunos a desenvolver raciocínio lógico e confiança, transformando a relação deles com a matéria.",
    highlights: [
      "Apresentação do Método ELC®: Entendimento, Lógica e Construção",
      "Áreas de sobre, cursos e contato com chamadas para começar a jornada",
      "Identidade visual colorida, fiel à marca",
    ],
    url: "https://conta-que-vai-front.vercel.app/",
    displayUrl: "conta-que-vai-front.vercel.app",
    image: {
      src: contaQueVai800,
      srcSet: `${contaQueVai560} 560w, ${contaQueVai800} 800w, ${contaQueVai1600} 1600w`,
      width: 1600,
      height: 819,
      alt: "Página inicial do Conta Que Vai com o título “Matemática que Transforma” e a chamada para o Método ELC®",
    },
    message: "Olá! Vi o case Conta Que Vai no site da JN e gostaria de conversar sobre um projeto parecido.",
  },
];
