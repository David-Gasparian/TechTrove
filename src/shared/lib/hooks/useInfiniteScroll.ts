import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollOptions {
    targetRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
    clb?: () => void;
}

/**
 * Custom hook to implement infinite scrolling using the Intersection Observer API.
 *
 * @interface useInfiniteScrollOptions
 * @property {MutableRefObject<HTMLDivElement>} targetRef - Ref to the target element that triggers the callback when in view.
 * @property {MutableRefObject<HTMLDivElement>} wrapperRef - Ref to the scrollable container element.
 * @property {() => void} [clb] - Optional callback function to be executed when the target element intersects with the viewport.
 *
 * @param {useInfiniteScrollOptions} options - The options for configuring the infinite scroll behavior.
 *
 * @example
 * const wrapperRef = useRef<HTMLDivElement>(null);
 * const targetRef = useRef<HTMLDivElement>(null);
 *
 * useInfiniteScroll({
 *   targetRef,
 *   wrapperRef,
 *   clb: () => {
 *     // Load more content when the target element comes into view
 *   },
 * });
 */
export const useInfiniteScroll = ({ targetRef, wrapperRef, clb }: useInfiniteScrollOptions) => {
    useEffect(() => {
        if (!clb) {
            return;
        }

        const wrapperRefComp = wrapperRef.current;
        const targetRefComp = targetRef.current;

        const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting) {
                clb();
            }
        };

        const options = {
            root: wrapperRefComp,
            rootMargin: '0px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleIntersection, options);

        if (targetRefComp) {
            observer.observe(targetRefComp);
        }

        return () => {
            if (observer && targetRefComp) {
                observer.disconnect();
                observer.unobserve(targetRefComp);
            }
        };
    }, [clb, targetRef, wrapperRef]);
};
