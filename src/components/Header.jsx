import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks, whatsappMessages } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { buttonClass } from "./buttonStyles";
import Container from "./Container";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

const sectionIds = navLinks.map((link) => link.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  // Esc fecha o menu; ao chegar ao layout desktop o menu mobile é recolhido.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event) => event.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-slate-200/80 bg-white/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <a href="#inicio" aria-label="JNunes Tech Soluções — voltar ao início" onClick={closeMenu}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-lg px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                      isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-blue-600 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            message={whatsappMessages.general}
            className={buttonClass({ variant: "outline", size: "sm", className: "max-sm:hidden" })}
          >
            Fale conosco
          </WhatsAppLink>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Menu mobile: recolhe via grid-rows para animar altura sem medir o DOM */}
      <div
        id="menu-mobile"
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="pt-2 pb-6">
            <nav aria-label="Navegação mobile">
              <ul className="space-y-1 border-t border-slate-200/80 pt-4">
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={closeMenu}
                      aria-current={active === id ? "location" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active === id
                          ? "bg-blue-50 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {label}
                      {active === id && <span className="size-1.5 rounded-full bg-blue-600" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <WhatsAppLink
              message={whatsappMessages.general}
              onClick={closeMenu}
              className={buttonClass({ className: "mt-4 w-full sm:hidden" })}
            >
              Fale conosco
            </WhatsAppLink>
          </Container>
        </div>
      </div>
    </header>
  );
}
