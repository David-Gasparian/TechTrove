import {
    HTMLAttributes,
    MutableRefObject,
    ReactNode,
    useRef,
    UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { TestProps } from '@/shared/types/tests';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { useThrottling } from '@/shared/lib/hooks/useThrottling';
import { StateSchema } from '@/app/provider/storeProvider';
import { saveScrollPositionActions, selectScrollByPath } from '@/features/SaveScrollPosition';
import cln from './Page.module.scss';

interface PageProps extends HTMLAttributes<HTMLDivElement>, TestProps {
    className?: string;
    children: ReactNode;
    onScrollToEnd?: () => void;
    isScrollSave?: boolean;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollToEnd,
        isScrollSave = false,
        'data-testid': dataTestid = 'Page',
    } = props;

    const dispatch = useAppDispatch();
    const location = useLocation();
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useSelector((state: StateSchema) => selectScrollByPath(state, location.pathname));

    useInfiniteScroll({ targetRef, wrapperRef, clb: onScrollToEnd });

    useInitEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollHandler = useThrottling((e: UIEvent<HTMLDivElement>) => {
        if (!isScrollSave) return;

        const { scrollTop } = e.currentTarget;
        dispatch(saveScrollPositionActions.setScroll({ path: location.pathname, position: scrollTop }));
    }, 500);

    return (
        <main
            data-testid={dataTestid}
            onScroll={onScrollHandler}
            ref={wrapperRef}
            {...props}
            className={classNames(cln.Page, {}, [className])}
        >
            {children}
            <div className={cln.trigger} ref={targetRef} />
        </main>
    );
};
