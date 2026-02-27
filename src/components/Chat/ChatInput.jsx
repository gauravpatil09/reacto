import { useTheme } from "../context/ThemeContext";

export default function ChatInput() {
  const { theme } = useTheme();

  return (
    <div className={`p-4 ${theme.chatBg}`}>
      <div className={`flex items-center rounded-full px-4 py-2 ${theme.inputBg}`}>
        <input
          type="text"
          placeholder={
            theme.name === "chatgpt"
              ? "Send a message..."
              : "Ask Gemini..."
          }
          className="flex-1 bg-transparent outline-none"
        />
        <button className={`ml-3 px-4 py-1 rounded-full text-white ${theme.buttonBg}`}>
          Send
        </button>
      </div>
    </div>
  );
}