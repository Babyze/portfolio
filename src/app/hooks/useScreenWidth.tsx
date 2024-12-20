import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [width, setWidth] = useState(0);

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return { width };
};
