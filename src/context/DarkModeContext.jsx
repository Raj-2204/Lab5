import {createContext} from "react";
import {useState} from  "react";
import {useEffect} from "react";
export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [mode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (err) {
      return "light";
    }
  });
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
    console.log(mode);
  }, [mode]);
  const toggleTheme = () => {
    setDarkMode(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <DarkModeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
