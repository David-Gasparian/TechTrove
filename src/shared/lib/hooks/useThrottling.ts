import { useRef, useCallback } from 'react';

/**
 * Custom hook to throttle the execution of a callback function.
 *
 * @param {Function} callback - The function to be throttled.
 * @param {number} delay - The delay in milliseconds for the throttle.
 * @returns {Function} - A throttled version of the callback function.
 *
 * @example
 * const throttledClick = useThrottling(() => {
 *   console.log('Button clicked');
 * }, 1000);
 *
 * <button onClick={throttledClick}>Click me</button>
 */
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
