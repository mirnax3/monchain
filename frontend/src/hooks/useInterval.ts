import { useEffect, useRef } from 'react';

export function useInterval(callback: GenericHandler, delay: number, show: boolean) {
  const callbackRef = useRef<GenericHandler>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      callbackRef.current?.();
    };

    if (delay !== null && show) {
      const interval = setInterval(tick, delay);

      return () => clearInterval(interval);
    }
  }, [delay, show, callbackRef]);
}
