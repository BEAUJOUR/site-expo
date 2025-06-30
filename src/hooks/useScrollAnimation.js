import { useEffect } from 'react';

const useScrollAnimation = (selector, animationClass) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const onScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(animationClass);
        } else {
          el.classList.remove(animationClass);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [selector, animationClass]);
};

export default useScrollAnimation;
