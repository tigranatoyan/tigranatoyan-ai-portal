"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTER_QUESTIONS = [
  "What projects has Tigran built?",
  "What roles is Tigran targeting?",
  "How can I hire Tigran?",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;

    const userMessage: Message = { role: "user", content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      const res = await fetch(`${base}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Request failed");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (err: unknown) {
      const fallback =
        err instanceof Error && err.message.length < 200
          ? err.message
          : "I'm currently unavailable. Please contact Tigran directly at tigran.atoyan80@gmail.com";
      setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="flex w-80 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-executive"
          style={{ height: "460px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/20 text-signal">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M18 10C18 14.4183 14.4183 18 10 18C8.50733 18 7.11655 17.5892 5.93551 16.8726L2 18L3.12742 14.0645C2.41079 12.8835 2 11.4927 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Ask about Tigran</p>
                <p className="text-[10px] text-signal">AI Portfolio Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-slate-400 transition hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="mt-2 space-y-4">
                <p className="text-center text-xs text-slate-400">
                  Ask me about Tigran&apos;s projects, skills, experience, or services.
                </p>
                <div className="space-y-2">
                  {STARTER_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-xs text-slate-300 transition hover:border-signal/30 hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "border border-signal/25 bg-signal/10 text-signal"
                      : "border border-white/10 bg-white/[0.06] text-slate-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2.5">
                  <div className="flex gap-1">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-signal"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question…"
              className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-signal/40 focus:bg-white/[0.08]"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-slate-950 transition hover:bg-white disabled:opacity-40"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M12 6.5L1 1L4 6.5L1 12L12 6.5Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-slate-950 shadow-executive transition hover:bg-white"
      >
        {isOpen ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M18 10C18 14.4183 14.4183 18 10 18C8.50733 18 7.11655 17.5892 5.93551 16.8726L2 18L3.12742 14.0645C2.41079 12.8835 2 11.4927 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
