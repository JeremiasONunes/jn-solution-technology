import { RotateCcw, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "../../config/site";
import { LogoMark } from "../Logo";
import ChatComposer from "./ChatComposer";
import ChatMessages from "./ChatMessages";

const hasFinePointer = () => window.matchMedia("(pointer: fine)").matches;

export default function ChatWindow({ id, open, onClose, chat }) {
  const dialogRef = useRef(null);
  const focusRef = useRef(null);

  // Esc fecha a janela.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Leva o foco ao controle da etapa atual. Em telas de toque, evita abrir o teclado
  // sozinho: o foco vai para a própria janela.
  useEffect(() => {
    if (!open || chat.typing) return;
    const dialog = dialogRef.current;
    if (focusRef.current && hasFinePointer()) {
      focusRef.current.focus({ preventScroll: true });
    } else if (!dialog.contains(document.activeElement)) {
      dialog.focus({ preventScroll: true });
    }
  }, [open, chat.step, chat.typing]);

  return (
    <div
      ref={dialogRef}
      id={id}
      role="dialog"
      aria-modal="false"
      aria-labelledby={`${id}-titulo`}
      tabIndex={-1}
      inert={!open}
      className={`fixed inset-x-3 bottom-[calc(max(1rem,env(safe-area-inset-bottom))+5rem)] z-40 flex h-[min(36rem,calc(100svh-10.5rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 shadow-2xl shadow-black/60 backdrop-blur-xl transition duration-200 ease-out outline-none sm:inset-x-auto sm:right-6 sm:bottom-28 sm:w-[24rem] ${
        open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"
      }`}
    >
      <header className="flex items-center gap-3 border-b border-white/[0.07] bg-gray-900 px-4 py-3.5">
        <span className="relative">
          <LogoMark className="size-10" />
          <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full bg-whatsapp ring-2 ring-gray-900" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id={`${id}-titulo`} className="truncate font-display text-[15px] font-bold text-white">
            {siteConfig.name}
          </h2>
          <p className="text-xs text-slate-400">Assistente virtual · online</p>
        </div>
        <button
          type="button"
          onClick={chat.reset}
          aria-label="Recomeçar conversa"
          title="Recomeçar conversa"
          className="flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar chat"
          className="flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </header>

      <ChatMessages messages={chat.messages} typing={chat.typing} lead={chat.lead} />

      <div className="border-t border-white/[0.07] bg-gray-900 px-4 pt-3 pb-4">
        <ChatComposer chat={chat} focusRef={focusRef} />
        <p className="mt-2 text-center text-[11px] text-slate-500">
          Você revisa a mensagem no WhatsApp antes de enviar.
        </p>
      </div>
    </div>
  );
}
