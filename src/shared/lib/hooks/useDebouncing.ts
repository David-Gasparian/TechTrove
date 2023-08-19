import { useRef, useCallback } from 'react';

export const useDebouncing = (callback: Function, delay: number) => {
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    return useCallback((...args: any[]) => {
        if (timerId.current) {
            clearTimeout(timerId.current);
        }

        timerId.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};
