import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollOptions {
    targetRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
    clb?: () => void;
}

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
