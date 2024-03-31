import { useEffect, useRef } from 'react';

interface IntersectionObserverConfig {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type IntersectionObserverCallback = (entry: IntersectionObserverEntry) => void;

export default function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  config?: IntersectionObserverConfig
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) {
          callback(entry); 
        }
      });
    }, config || { threshold: 1 });
  }, [callback, config]);

  const observe = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  return [observe, unobserve];
}