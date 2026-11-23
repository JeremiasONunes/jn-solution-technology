import { useCallback, useEffect, useReducer, useRef } from "react";
import { chatCopy, getNeed } from "../data/chatbot";

/*
 * Máquina de estados do assistente:
 *   name → need → description → summary → done
 * Cada resposta do usuário avança uma etapa; o bot responde após um breve "digitando…".
 */

let lastId = 0;
const createMessage = (from, text, kind = "text") => ({ id: ++lastId, from, text, kind });

const emptyLead = { name: "", needId: null, description: "" };

function createInitialState() {
  return {
    step: "name",
    typing: false,
    lead: emptyLead,
    messages: chatCopy.greeting.map((text) => createMessage("bot", text)),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "user":
      return {
        ...state,
        step: action.step,
        typing: true,
        lead: { ...state.lead, ...action.lead },
        messages: [...state.messages, action.message],
      };
    case "bot":
      return { ...state, typing: false, messages: [...state.messages, ...action.messages] };
    case "sent":
      return { ...state, step: "done", messages: [...state.messages, action.message] };
    case "reset":
      return createInitialState();
    default:
      return state;
  }
}

const replyDelay = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 700;

export function useChatFlow() {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const answer = useCallback((userText, step, lead, botMessages) => {
    dispatch({ type: "user", step, lead, message: createMessage("user", userText) });
    const timer = setTimeout(() => dispatch({ type: "bot", messages: botMessages }), replyDelay());
    timers.current.push(timer);
  }, []);

  const submitName = useCallback(
    (name) => answer(name, "need", { name }, [createMessage("bot", chatCopy.askNeed(name))]),
    [answer],
  );

  const selectNeed = useCallback(
    (needId) => {
      const need = getNeed(needId);
      answer(need.label, "description", { needId }, [createMessage("bot", need.prompt)]);
    },
    [answer],
  );

  const submitDescription = useCallback(
    (description) =>
      answer(description, "summary", { description }, [
        createMessage("bot", chatCopy.summary),
        createMessage("bot", "", "summary"),
      ]),
    [answer],
  );

  const markSent = useCallback(() => {
    if (state.step === "summary") {
      dispatch({ type: "sent", message: createMessage("bot", chatCopy.sent(state.lead.name)) });
    }
  }, [state.step, state.lead.name]);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    dispatch({ type: "reset" });
  }, []);

  return { ...state, submitName, selectNeed, submitDescription, markSent, reset };
}
