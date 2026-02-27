import { useTheme } from "../context/ThemeContext";

export default function ChatHeader() {
  const { theme } = useTheme();

  return (
    <div className={`p-4 border-b ${theme.headerBg} ${theme.textColor}`}>
      <h1 className="text-lg font-medium">
        {theme.name === "chatgpt" ? "ChatGPT" : "Gemini"}
      </h1>
    </div>
  );
}