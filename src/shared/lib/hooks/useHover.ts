import { useCallback, useMemo, useState } from 'react';

interface HoverEvents {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, HoverEvents];

/**
 * Custom hook to handle hover state for a component.
 *
 * @interface HoverEvents
 * @property {() => void} onMouseEnter - Handler to be called when the mouse enters the component.
 * @property {() => void} onMouseLeave - Handler to be called when the mouse leaves the component.
 *
 * @typedef {Array} UseHoverResult
 * @property {boolean} 0 - Indicates if the component is currently hovered.
 * @property {HoverEvents} 1 - Object containing onMouseEnter and onMouseLeave event handlers.
 *
 * @returns {UseHoverResult} - A tuple where the first element is the hover state and the second is an object with hover event handlers.
 *
 * @example
 * const [isHovered, hoverEvents] = useHover();
 *
 * <div {...hoverEvents}>
 *   {isHovered ? 'Hovered!' : 'Not hovered'}
 * </div>
 */
export const useHover = ():UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [
            isHover,
            {
                onMouseEnter, onMouseLeave,
            }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
