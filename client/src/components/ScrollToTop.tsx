import { useLayoutEffect } from 'react';
import { useLocation } from 'wouter';

const ScrollToTop = () => {
  const [location] = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // No smooth scrolling for immediate effect
    });
  }, [location]);

  return null;
};

export default ScrollToTop;