 import { Outlet } from "react-router-dom";
 import { ThemeProvider } from "./components/context/ThemeContext";
//  import ChatPage from "./components/Pages/ChatPage";
function App() {
  return (
    <ThemeProvider>
      <Outlet />
      {/* <ChatPage /> */}
    </ThemeProvider>
  );
}

export default App;