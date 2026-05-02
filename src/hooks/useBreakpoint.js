import { useState, useEffect } from "react";

/**
 * Returns current breakpoint info.
 * isMobile  : < 640px
 * isTablet  : 640px – 1023px
 * isDesktop : >= 1024px
 */
export function useBreakpoint() {
  const getBreakpoint = () => ({
    isMobile: window.innerWidth < 640,
    isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
    width: window.innerWidth,
  });

  const [bp, setBp] = useState(getBreakpoint);

  useEffect(() => {
    const handler = () => setBp(getBreakpoint());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}
