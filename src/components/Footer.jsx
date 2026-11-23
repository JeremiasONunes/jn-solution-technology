import { ArrowUp, Mail, MapPin } from "lucide-react";
import { navLinks, siteConfig, whatsappMessages } from "../config/site";
import { services } from "../data/services";
import Container from "./Container";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

const currentYear = new Date().getFullYear();
const linkClass = "text-[15px] text-slate-400 transition-colors hover:text-white";

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="snap-end border-t border-white/[0.06] bg-ink-soft">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr_1fr] lg:gap-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-[15px] leading-relaxed text-slate-400">{siteConfig.description}</p>
        </div>

        <FooterColumn title="Navegação">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Serviços">
          {services.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass}>
                {title}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contato">
          <li>
            <WhatsAppLink message={whatsappMessages.general} className={`${linkClass} inline-flex items-center gap-2`}>
              <WhatsAppIcon className="size-4 text-whatsapp" />
              WhatsApp
            </WhatsAppLink>
          </li>
          {siteConfig.email && (
            <li>
              <a href={`mailto:${siteConfig.email}`} className={`${linkClass} inline-flex items-center gap-2`}>
                <Mail className="size-4 text-blue-400" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          )}
          {siteConfig.location && (
            <li className="inline-flex items-center gap-2 text-[15px] text-slate-400">
              <MapPin className="size-4 text-blue-400" aria-hidden="true" />
              {siteConfig.location}
            </li>
          )}
        </FooterColumn>
      </Container>

      <div className="border-t border-white/[0.06]">
        <Container className="flex flex-col-reverse items-start justify-between gap-4 py-6 pr-24 text-sm text-slate-400 sm:flex-row sm:items-center sm:pr-28">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            Voltar ao topo
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
