import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        SVG,
    } = props;

    return (
        <div
            className={classNames(cln.Icon, {}, [className])}
        >
            <SVG className={cln.svg} />
        </div>
    );
});
