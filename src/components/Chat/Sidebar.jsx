import { useTheme } from "../context/ThemeContext";

export default function SideBar() {
  const { theme } = useTheme();

  return (
    <div className={`w-64 p-4 ${theme.sidebarBg} ${theme.textColor}`}>
      <h2 className="text-lg font-semibold mb-6">
        {theme.name === "chatgpt" ? "ChatGPT" : "Gemini"}
      </h2>

      <button className="w-full text-left py-2 px-3 rounded hover:bg-gray-500/20">
        + New Chat
      </button>
    </div>
  );
}