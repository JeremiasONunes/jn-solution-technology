import { useEffect, useRef } from "react";
import ChatSummary from "./ChatSummary";

function TypingIndicator() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-md bg-gray-800/80 px-4 py-3.5">
      <span className="sr-only">O assistente está digitando…</span>
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="size-1.5 rounded-full bg-slate-400 motion-safe:animate-typing"
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/** Histórico da conversa; rola automaticamente para a última mensagem. */
export default function ChatMessages({ messages, typing, lead }) {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ top: list.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }, [messages.length, typing]);

  return (
    <div
      ref={listRef}
      role="log"
      aria-live="polite"
      aria-label="Conversa com o assistente"
      className="flex-1 space-y-2.5 overflow-y-auto overscroll-contain px-4 py-5"
    >
      {messages.map((message) =>
        message.kind === "summary" ? (
          <ChatSummary key={message.id} lead={lead} />
        ) : (
          <p
            key={message.id}
            className={`w-fit max-w-[85%] rounded-2xl px-4 py-2.5 text-[14.5px] leading-relaxed break-words whitespace-pre-line ${
              message.from === "user"
                ? "ml-auto rounded-tr-md bg-blue-600 text-white"
                : "rounded-tl-md bg-gray-800/80 text-slate-200"
            }`}
          >
            <span className="sr-only">{message.from === "user" ? "Você: " : "Assistente: "}</span>
            {message.text}
          </p>
        ),
      )}
      {typing && <TypingIndicator />}
    </div>
  );
}
