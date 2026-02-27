import { useTheme } from "../context/ThemeContext";

export default function ChatWindow() {
  const { theme } = useTheme();

  return (
    <div className={`flex-1 overflow-y-auto p-6 ${theme.chatBg}`}>
      
      {/* Bot Message */}
      <div className="mb-4">
        <div className="max-w-xl p-4 rounded-lg bg-gray-500/10">
          Hello 👋 This UI changes between ChatGPT & Gemini theme.
        </div>
      </div>

      {/* User Message */}
      <div className="flex justify-end">
        <div className="max-w-xl p-4 rounded-lg bg-blue-500 text-white">
          Nice!
        </div>
      </div>

    </div>
  );
}