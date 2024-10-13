import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
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
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
}

type HeaderTags = 'h1' | 'h2' | 'h3';

const mapHeaderSizes: Record<TextSize, HeaderTags> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextALign;
    size?: TextSize;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextALign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapHeaderSizes[size];

    return (
        <div
            data-testid="textWrapper"
            className={classNames(cln.Text, {}, [
                className,
                cln[theme],
                cln[align],
                cln[size],
            ])}
        >
            {title && (
                <HeaderTag data-testid="title" className={cln.title}>
                    {title}
                </HeaderTag>
            )}

            {text && (
                <p data-testid="text" className={cln.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
