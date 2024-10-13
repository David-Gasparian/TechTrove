import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Icon = memo((props: IconProps) => {
    const { className, SVG, isInverted, ...otherProps } = props;

    return (
        <SVG
            className={classNames(
                '',
                {
                    [cls.inverted]: isInverted,
                    [cls.Icon]: !isInverted,
                },
                [className],
            )}
            {...otherProps}
        />
    );
});
