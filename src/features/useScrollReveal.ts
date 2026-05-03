import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container element.
 * When direct children enter the viewport, the class `is-visible` is added.
 * Pair with CSS: `.scroll-reveal { opacity: 0; transform: translateY(20px); transition: … }`
 *               `.scroll-reveal.is-visible { opacity: 1; transform: none; }`
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(".scroll-reveal"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return ref;
}
