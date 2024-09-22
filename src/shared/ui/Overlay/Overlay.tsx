import { HTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            {...props}
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});
