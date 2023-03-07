import { CSSProperties, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Skeleton.module.scss';

interface LoaderProps {
    className?: string;
    width: number | string;
    height: number | string;
    border?: string;
}

export const Skeleton = memo((props: LoaderProps) => {
    const {
        className,
        width,
        height,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            style={style}
            className={classNames(cln.Skeleton, {}, [className])}
        />
    );
});
