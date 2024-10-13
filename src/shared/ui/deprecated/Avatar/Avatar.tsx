import { CSSProperties, memo, useMemo } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import avatarImg from '../../../assets/icons/avatar.svg';
import cln from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size = 100, fallbackInverted } = props;

    const mode: Mode = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton height={size} width={size} border="50%" />;
    const errorFallback = (
        <Icon
            isInverted={fallbackInverted}
            height={size}
            width={size}
            SVG={avatarImg}
        />
    );

    return (
        <AppImage
            data-testid="avatar"
            className={classNames(cln.Avatar, mode, [className])}
            style={styles}
            src={src}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
