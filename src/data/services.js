import {
  AppWindow,
  Code2,
  Cpu,
  Globe,
  Headset,
  LayoutDashboard,
  LayoutTemplate,
  MonitorCog,
  Network,
  Router,
  Server,
  SprayCan,
  Wifi,
  Workflow,
  Wrench,
} from "lucide-react";
import { whatsappMessages } from "../config/site";

export const services = [
  {
    id: "manutencao",
    icon: Wrench,
    title: "Manutenção de computadores",
    description:
      "Diagnóstico, manutenção preventiva e corretiva para manter seus equipamentos funcionando com desempenho e segurança.",
    items: [
      { label: "Formatação e configuração", icon: MonitorCog },
      { label: "Upgrade de hardware", icon: Cpu },
      { label: "Limpeza e manutenção", icon: SprayCan },
      { label: "Suporte residencial e empresarial", icon: Headset },
    ],
    cta: "Solicitar atendimento",
    message: whatsappMessages.maintenance,
  },
  {
    id: "infraestrutura",
    icon: Network,
    title: "Infraestrutura de TI",
    description:
      "A tecnologia da sua empresa precisa funcionar. Cuidamos da estrutura que mantém sua operação conectada.",
    items: [
      { label: "Instalação e configuração de redes", icon: Wifi },
      { label: "Configuração de equipamentos", icon: Router },
      { label: "Suporte técnico", icon: Headset },
      { label: "Organização de ambientes de TI", icon: Server },
    ],
    cta: "Falar sobre infraestrutura",
    message: whatsappMessages.infrastructure,
  },
  {
    id: "desenvolvimento",
    icon: Code2,
    title: "Desenvolvimento de soluções digitais",
    description:
      "Soluções digitais pensadas para apresentar seu negócio, melhorar processos e acompanhar seu crescimento.",
    items: [
      { label: "Landing pages", icon: LayoutTemplate },
      { label: "Sites institucionais", icon: Globe },
      { label: "Sistemas web personalizados", icon: AppWindow },
      { label: "Painéis administrativos", icon: LayoutDashboard },
      { label: "Automação de processos", icon: Workflow },
    ],
    cta: "Começar um projeto",
    message: whatsappMessages.development,
  },
];
