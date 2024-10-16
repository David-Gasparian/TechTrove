import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Loader = memo((props: LoaderProps) => {
    const { className } = props;

    return (
        <div
            data-testid="loader"
            className={classNames('lds-roller', {}, [className])}
        >
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
});
