import { RotateCcw, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { buildLeadMessage, chatLimits, chatNeeds, getNeed } from "../../data/chatbot";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import WhatsAppLink from "../WhatsAppLink";

const fieldClass =
  "w-full resize-none rounded-xl border bg-ink/60 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 " +
  "transition-colors focus:border-blue-500/60 focus:outline-none disabled:opacity-50";

/** Campo de texto para as etapas "nome" e "descrição", com validação inline. */
function TextComposer({ step, lead, disabled, focusRef, onSubmit }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const isName = step === "name";
  const { min, max } = isName ? chatLimits.name : chatLimits.description;
  const errorId = `chat-${step}-erro`;

  const submit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length < min) {
      setError(
        isName
          ? "Digite seu nome para continuarmos."
          : `Conte um pouco mais (mínimo de ${min} caracteres).`,
      );
      return;
    }
    onSubmit(text);
  };

  const onChange = (event) => {
    setValue(event.target.value);
    if (error) setError("");
  };

  const fieldProps = {
    ref: focusRef,
    value,
    onChange,
    disabled,
    maxLength: max,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: `${fieldClass} ${error ? "border-rose-400/60" : "border-white/10"}`,
  };

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor={`chat-${step}`} className="sr-only">
        {isName ? "Seu nome" : "Descreva a sua necessidade"}
      </label>
      <div className="flex items-end gap-2">
        {isName ? (
          <input id={`chat-${step}`} type="text" autoComplete="given-name" placeholder="Digite seu nome" {...fieldProps} />
        ) : (
          <textarea
            id={`chat-${step}`}
            rows={3}
            placeholder={getNeed(lead.needId)?.placeholder}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) submit(event);
            }}
            {...fieldProps}
          />
        )}
        <button
          type="submit"
          disabled={disabled}
          aria-label="Enviar resposta"
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 active:scale-95 disabled:opacity-50"
        >
          <SendHorizontal className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-1.5 flex min-h-5 justify-between gap-3 text-xs">
        <span id={errorId} role="alert" className="text-rose-300">
          {error}
        </span>
        {!isName && (
          <span className="text-slate-500 tabular-nums">
            {value.length}/{max}
          </span>
        )}
      </div>
    </form>
  );
}

function NeedOptions({ disabled, focusRef, onSelect }) {
  return (
    <fieldset disabled={disabled} className="disabled:opacity-50">
      <legend className="sr-only">Escolha o tipo de necessidade</legend>
      <div className="grid grid-cols-2 gap-2">
        {chatNeeds.map(({ id, label, icon: Icon }, index) => (
          <button
            key={id}
            ref={index === 0 ? focusRef : undefined}
            type="button"
            onClick={() => onSelect(id)}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left text-[13px] leading-snug font-medium text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white active:scale-[0.98]"
          >
            <Icon className="size-4 shrink-0 text-blue-400" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function SendActions({ step, lead, focusRef, onSent, onReset }) {
  return (
    <div className="space-y-2">
      <WhatsAppLink
        ref={focusRef}
        message={buildLeadMessage(lead)}
        onClick={onSent}
        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-whatsapp font-semibold text-ink shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-strong active:scale-[0.98]"
      >
        <WhatsAppIcon className="size-5" />
        {step === "done" ? "Abrir o WhatsApp novamente" : "Enviar resumo pelo WhatsApp"}
      </WhatsAppLink>
      <button
        type="button"
        onClick={onReset}
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Recomeçar conversa
      </button>
    </div>
  );
}

/** Mostra apenas o controle da etapa atual da conversa. */
export default function ChatComposer({ chat, focusRef }) {
  const { step, typing, lead } = chat;

  if (step === "need") {
    return <NeedOptions disabled={typing} focusRef={focusRef} onSelect={chat.selectNeed} />;
  }

  if (step === "summary" || step === "done") {
    if (typing) return null;
    return (
      <SendActions step={step} lead={lead} focusRef={focusRef} onSent={chat.markSent} onReset={chat.reset} />
    );
  }

  const onSubmit = step === "name" ? chat.submitName : chat.submitDescription;
  return (
    <TextComposer key={step} step={step} lead={lead} disabled={typing} focusRef={focusRef} onSubmit={onSubmit} />
  );
}
