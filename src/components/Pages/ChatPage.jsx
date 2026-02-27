import SideBar from "../components/chat/SideBar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import { useTheme } from "../components/context/ThemeContext";

export default function ChatPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`h-screen w-screen flex ${theme.mainBg} ${theme.textColor}`}>

      {/* Sidebar */}
      <SideBar />

      {/* Chat Area */}
      <div className="flex flex-col flex-1 relative">
        <ChatHeader />
        <ChatWindow />
        <ChatInput />

        {/* Small Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full shadow-md transition ${theme.buttonBg} text-white`}
        >
          {theme.name === "chatgpt" ? "Gemini" : "ChatGPT"}
        </button>
      </div>

    </div>
  );
}