import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash is present, try to scroll to the element after route change
    if (hash) {
      // slight delay allows content to render
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          const rect = target.getBoundingClientRect();
          const y = window.scrollY + rect.top - 8; // small offset
          window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;


