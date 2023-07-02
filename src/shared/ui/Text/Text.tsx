import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextALign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}
export enum TextSize {
    M = 'size-m',
    L = 'size-l',
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextALign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextALign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div
            data-testid='textWrapper'
            className={classNames(cln.Text, {}, [className, cln[theme], cln[align], cln[size]])}
        >
            {title && (
                <div
                    data-testid='title'
                    className={cln.title}
                >
                    {title}
                </div>
            )}

            {text && (
                <div
                    data-testid='text'
                    className={cln.text}
                >
                    {text}
                </div>
            )}

        </div>
    );
});
