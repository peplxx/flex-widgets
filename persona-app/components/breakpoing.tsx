import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>("");

  const updateBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setBreakpoint("lg");
    } else if (width >= 768) {
      setBreakpoint("md");
    } else {
      setBreakpoint("sm");
    }
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
