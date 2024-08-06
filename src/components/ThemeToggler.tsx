import { useState, useEffect } from "react";
import Sun from "../images/Sun";
import Moon from "../images/Moon";

const Toggler: React.FC<{}> = () => {
  const [darkMode, setDarkMode] = useState(() => {
    let isDark: boolean = matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    return isDark;
  });

  useEffect(() => {
    let isDark: boolean = matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="p-2 rounded-full hover:bg-gray-400 hover:bg-opacity-30 hover:cursor-pointer flex">
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default Toggler;
