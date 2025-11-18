import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterConfig {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

interface AnimatedCounter {
  displayValue: string;
  progress: number;
  isAnimating: boolean;
}

export function useAnimatedCounters(
  configs: AnimatedCounterConfig[],
  startAnimation: boolean = true
): AnimatedCounter[] {
  const [counters, setCounters] = useState<AnimatedCounter[]>(
    configs.map(config => ({
      displayValue: config.prefix || '' + '0' + (config.suffix || ''),
      progress: 0,
      isAnimating: false,
    }))
  );
  
  const animationFrameRef = useRef<number[]>([]);
  const startTimeRef = useRef<number[]>([]);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!startAnimation) return;
    
    // Prevent multiple simultaneous animations
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const animateCounter = (index: number, config: AnimatedCounterConfig) => {
      const duration = config.duration || 2000;
      const delay = config.delay || 0;
      
      setTimeout(() => {
        startTimeRef.current[index] = Date.now();
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index].isAnimating = true;
          return newCounters;
        });

        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTimeRef.current[index];
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function (ease-out-cubic)
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentValue = config.value * eased;
          
          const formattedValue = config.decimals !== undefined
            ? currentValue.toFixed(config.decimals)
            : Math.floor(currentValue).toString();
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = {
              displayValue: (config.prefix || '') + formattedValue + (config.suffix || ''),
              progress: eased,
              isAnimating: progress < 1,
            };
            return newCounters;
          });

          if (progress < 1) {
            animationFrameRef.current[index] = requestAnimationFrame(animate);
          }
        };

        animationFrameRef.current[index] = requestAnimationFrame(animate);
      }, delay);
    };

    configs.forEach((config, index) => {
      animateCounter(index, config);
    });

    return () => {
      hasStartedRef.current = false;
      // Capture the current ref value to avoid the warning
      const frames = animationFrameRef.current;
      frames.forEach(frame => {
        if (frame) cancelAnimationFrame(frame);
      });
    };
  }, [configs, startAnimation]);

  return counters;
}

// Helper hook for single counter
export function useAnimatedCounter(
  config: AnimatedCounterConfig,
  startAnimation: boolean = true
): AnimatedCounter {
  const [counter] = useAnimatedCounters([config], startAnimation);
  return counter;
}