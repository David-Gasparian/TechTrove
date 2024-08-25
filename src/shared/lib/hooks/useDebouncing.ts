import { useRef, useCallback } from 'react';

/**
 * Custom hook to create a debounced function.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} delay - The delay in milliseconds for the debounce.
 * @returns {Function} - A debounced version of the callback function.
 *
 * @example
 * const debouncedSearch = useDebouncing((query) => search(query), 500);
 *
 * // Use debouncedSearch in an input field's onChange event
 * <input onChange={(e) => debouncedSearch(e.target.value)} />
 */
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
