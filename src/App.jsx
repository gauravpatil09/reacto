import { Outlet } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/Pages/ChatPage";
import ChatHeader from "./components/Chat/ChatHeader";
import ChatWindow from "./components/Chat/ChatWindow";
import ChaatInput from "./components/Chat/ChatInput";
import { ThemeProvider } from "./components/context/ThemeContext";
function App() {
  return (
    <>
      {/* <Outlet /> */}
      {/* <Home /> */}
      <ThemeProvider>
        <ChatPage />
    </ThemeProvider>
      {/* <ChatHeader /> */}
      {/* <ChatWindow /> */}
      {/* <ChaatInput /> */}

      

    </>
  );
}

export default App;
