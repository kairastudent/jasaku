import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils";

function useTheme() {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState("");
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme("");
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
}

export default useTheme;
