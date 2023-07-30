import { useRef, useCallback } from 'react';

export const useThrottling = (callback: Function, delay: number) => {
    const throttleRef = useRef<boolean>(false);

    return useCallback((...args: any[]) => {
        let timerId: ReturnType<typeof setTimeout>;

        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            timerId = setTimeout(() => {
                throttleRef.current = false;

                if (timerId) {
                    clearTimeout(timerId);
                }
            }, delay);
        }
    }, [callback, delay]);
};
