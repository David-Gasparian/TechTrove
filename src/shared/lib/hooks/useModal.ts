import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

/**
 * Custom hook to manage modal visibility and closing logic with animations.
 *
 * @interface UseModalProps
 * @property {() => void} [onClose] - Callback function to be executed when the modal is closed.
 * @property {boolean} [isOpen] - Boolean indicating if the modal is open.
 * @property {number} animationDelay - Delay in milliseconds for the closing animation.
 *
 * @param {UseModalProps} props - The properties for configuring the modal behavior.
 * @returns {Object} - An object containing:
 *   - `isClosing` (boolean): Indicates if the modal is in the process of closing.
 *   - `isMounted` (boolean): Indicates if the modal is mounted.
 *   - `close` (function): Function to trigger the closing of the modal.
 *
 * @example
 * const { isClosing, isMounted, close } = useModal({
 *   isOpen: true,
 *   onClose: () => console.log('Modal closed'),
 *   animationDelay: 300,
 * });
 *
 * // Example usage in a modal component
 * <Modal isOpen={isMounted} onClose={close} closing={isClosing} />
 */
export const useModal = ({
    animationDelay,
    isOpen,
    onClose,
}: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
};
