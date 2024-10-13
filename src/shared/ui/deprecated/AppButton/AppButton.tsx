import { ButtonHTMLAttributes, memo } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import cln from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'inverted-clear',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'inverted-background',
    OUTLINED_RED = 'outlined-red',
}

export enum AppButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    'data-testid'?: string;
    fullWidth?: boolean;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const AppButton = memo((props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.OUTLINED,
        square,
        disabled,
        size = AppButtonSize.M,
        'data-testid': dataTestid = 'AppButton',
        fullWidth,
        ...otherProps
    } = props;

    const mode: Mode = {
        [cln.square]: square,
        [cln.disabled]: disabled,
        [cln.fullWidth]: fullWidth,
    };

    return (
        <button
            data-testid={dataTestid}
            type="button"
            disabled={disabled}
            className={classNames(cln.AppButton, mode, [
                className,
                cln[theme],
                cln[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
