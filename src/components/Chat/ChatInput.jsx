import { useState } from "react";

export default function ChatInput() {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setText("");
  };

  return (
    <div className="border-t border-[#565869] p-4">
      <div className="max-w-3xl mx-auto flex items-center bg-[#40414f] rounded-xl px-4">
        <input
          className="flex-1 bg-transparent py-3 outline-none text-[#ececf1]"
          placeholder="Send a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="text-gray-300 hover:text-white">➤</button>
      </div>
    </div>
  );
}
