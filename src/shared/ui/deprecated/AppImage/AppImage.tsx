import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    'data-testid'?: string;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        src,
        alt = 'image',
        'data-testid': dataTestid = 'img',
        ...restProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            data-testid={dataTestid}
            className={className}
            src={src}
            alt={alt}
            {...restProps}
        />
    );
});
