import { useTheme } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme();

  return (
    <select
      value={themeName}
      onChange={(e) => setThemeName(e.target.value)}
      className="border rounded px-2 py-1 text-sm"
    >
      <option value="ChatGPT">ChatGPT</option>
      <option value="Gemini">Gemini</option>
      <option value="Normal">Normal</option>
    </select>
  );
}

export default ThemeSwitcher;
