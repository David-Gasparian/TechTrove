import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cln from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    fullWidth?: boolean;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Card = memo((props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, fullWidth } = props;

    return (
        <div
            {...props}
            className={classNames(cln.Card, { [cln.fullWidth]: fullWidth }, [
                className,
                cln[theme],
            ])}
        >
            {children}
        </div>
    );
});
