import { useEffect, useRef, useState } from "react";

/**
 * Compte progressivement jusqu’à une valeur cible
 * quand l’élément devient visible à l’écran.
 * Effet fluide, vitesse réglable.
 */
export default function useCountOnVisible(targetValue, duration = 1500) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    // let start = 0;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easing cubic out
      const value = Math.floor(eased * targetValue);
      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(targetValue);
    };

    requestAnimationFrame(animate);
  }, [visible, targetValue, duration]);

  return [ref, count];
}
