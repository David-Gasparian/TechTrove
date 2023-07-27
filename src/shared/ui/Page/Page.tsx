import {
    HTMLAttributes,
    memo,
    MutableRefObject,
    ReactNode,
    useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cln from './Page.module.scss';

interface PageProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    onScrollToEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollToEnd,
    } = props;

    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ targetRef, wrapperRef, clb: onScrollToEnd });

    return (
        <section ref={wrapperRef} {...props} className={classNames(cln.Page, {}, [className])}>
            {children}
            <div ref={targetRef} />
        </section>
    );
});
