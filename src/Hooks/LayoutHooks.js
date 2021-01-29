import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = (e) => {
    console.log("HANDLE WIDTH", e);
    setWindowWidth(e.target.innerWidth);
  };

  useEffect(() => {
    // console.log("UseEffect window width", windowWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return windowWidth;
};
