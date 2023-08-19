import {
    HTMLAttributes,
    memo, ReactElement,
    ReactNode,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
    } = props;

    return (
        <div {...props} className={classNames(cln.Card, {}, [className, cln[theme]])}>
            {children}
        </div>
    );
});
