import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
 }

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div
            data-testid='textWrapper'
            className={classNames(cln.Text, {}, [className, cln[theme]])}
        >
            {title && (
                <p
                    data-testid='title'
                    className={cln.title}
                >
                    {title}
                </p>
            )}

            {text && (
                <p
                    data-testid='text'
                    className={cln.text}
                >
                    {text}
                </p>
            )}

        </div>
    );
};
