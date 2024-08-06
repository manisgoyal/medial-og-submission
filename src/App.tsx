import { useEffect } from "react";
import Toggler from "./components/ThemeToggler";
import OGLogo from "./images/logo.png";
import LetterT from "./images/letterLogo";
import Arrow from "./images/arrow";
import Content from "./components/MainContent";

function App() {
  useEffect(() => {
    let isDark: boolean = matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, []);
  return (
    <div className="text-text flex flex-col min-h-screen justify-between bg-background">
      <div>
        <div className="w-full h-fit py-3 border-b-2 flex items-center justify-around">
          <div className="flex flex-col sm:flex-row">
            <div className="flex justify-center items-end">
              <LetterT className="w-8 h-8" />
              <Arrow className="w-8 h-8" />
              <img src={OGLogo} className="h-8 w-8" />
            </div>
            <p className="font-heading text-text text-base sm:text-2xl font-bold ml-2">
              Letter to OGImage Converter
            </p>
          </div>
          <Toggler />
        </div>
        {/* Main Content goes here */}
        <Content />
      </div>
      <div className="bg-secondary text-text flex w-full h-fit justify-center border-t-2 pt-1 mt-2 border-t-accent">
        <p>
          Designed with ❤️ by{" "}
          <a href="https://www.github.com/manisgoyal" target="_blank">
            Manish Goyal
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
