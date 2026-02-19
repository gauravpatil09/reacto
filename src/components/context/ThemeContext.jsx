import { createContext, useContext, useState } from "react";
// import { chatgptTheme } from "../assets/themes/chatgpt.theme.js";
// import { geminiTheme } from "../assets/themes/gemini.theme.js";

import { chatgptTheme } from "../../assets/themes/chatgpt.theme.js";
import { geminiTheme } from "../../assets/themes/gemini.theme.js";


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(chatgptTheme);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev.name === "chatgpt" ? geminiTheme : chatgptTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
