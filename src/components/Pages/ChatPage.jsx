import Sidebar from "../Chat/Sidebar";
import ChatHeader from "../Chat/ChatHeader";
import ChatWindow from "../Chat/ChatWindow";
import ChatInput from "../Chat/ChatInput";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-[#343541]">
        <ChatHeader />
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}
