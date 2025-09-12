import { useState, useEffect } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startDelay?: number;
}

export const useCountUp = ({ end, duration = 2000, startDelay = 0 }: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startCountUp = () => {
    if (hasStarted) return;
    
    setTimeout(() => {
      setHasStarted(true);
      const increment = end / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, startDelay);
  };

  return { count, startCountUp, hasStarted };
};