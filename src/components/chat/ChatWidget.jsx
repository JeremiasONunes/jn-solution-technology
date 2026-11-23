import { X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useChatFlow } from "../../hooks/useChatFlow";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import ChatWindow from "./ChatWindow";

const WINDOW_ID = "chat-jn";

/** Botão flutuante (ícone do WhatsApp em moldura) + janela do assistente. */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef(null);
  const chat = useChatFlow();

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  const toggle = () => {
    if (open) return close();
    setOpen(true);
  };

  return (
    <>
      <ChatWindow id={WINDOW_ID} open={open} onClose={close} chat={chat} />

      <button
        ref={launcherRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={WINDOW_ID}
        aria-label={open ? "Fechar chat de atendimento" : "Abrir chat de atendimento pelo WhatsApp"}
        className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 rounded-full border border-white/10 bg-ink/70 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md transition duration-200 hover:border-whatsapp/40 active:scale-95 sm:right-6 sm:bottom-6"
      >
        <span className="relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-colors duration-200 group-hover:bg-whatsapp-strong">
          <WhatsAppIcon
            className={`absolute size-7 transition duration-200 ${open ? "scale-50 rotate-90 opacity-0" : "scale-100 opacity-100"}`}
          />
          <X
            className={`absolute size-6 transition duration-200 ${open ? "scale-100 opacity-100" : "scale-50 -rotate-90 opacity-0"}`}
            aria-hidden="true"
          />
        </span>
      </button>
    </>
  );
}
