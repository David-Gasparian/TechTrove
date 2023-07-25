import {
    HTMLAttributes,
    memo, ReactElement,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactElement | ReactElement[];
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div {...props} className={classNames(cln.Card, {}, [className])}>
            {children}
        </div>
    );
});
