import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        SVG,
        isInverted = false,
    } = props;

    return (
        <div
            className={classNames(isInverted ? cln.inverted : cln.Icon, {}, [className])}
        >
            <SVG className={cln.svg} />
        </div>
    );
});
