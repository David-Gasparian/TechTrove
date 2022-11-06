import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cln.AppButton, {}, [className, cln[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
