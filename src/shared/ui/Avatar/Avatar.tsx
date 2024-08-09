import { CSSProperties, memo, useMemo } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import cln from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const mode: Mode = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            data-testid='avatar'
            className={classNames(cln.Avatar, mode, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
});
