import { useEffect, useRef, useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "How can I help you today?" }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
      {messages.map((m, i) => (
        <div key={i} className="flex">
          <div
            className={`max-w-3xl px-4 py-3 rounded-lg ${
              m.role === "bot"
                ? "bg-[#444654]"
                : "bg-[#343541] border border-[#565869] ml-auto"
            }`}
          >
            {m.text}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
