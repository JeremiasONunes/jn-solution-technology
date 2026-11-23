import { useEffect, useRef, useState } from "react";

const supportsObserver = () => typeof window !== "undefined" && "IntersectionObserver" in window;

/** Indica (uma única vez) quando o elemento entra na área visível. */
export function useInView({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => !supportsObserver());

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsObserver()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
