import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './AppLink.module.scss';

export enum APPLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: APPLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        children,
        className,
        theme = APPLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cln.appLink, {}, [className, cln[theme]])}
            data-testid="link"
            {...otherProps}
        >
            {children}
        </Link>
    );
});
