import {
    FC, MouseEvent, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cln from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const ref = useRef<ReturnType<typeof setTimeout>>(null);
    const [isClosing, setIsClosing] = useState(false);

    const mode: Record<string, boolean> = {
        [cln.opened]: isOpen,
        [cln.closing]: isClosing,
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                setIsClosing(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            clearTimeout(ref.current);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const onHandleClose = () => {
        if (onClose) {
            setIsClosing(true);
            ref.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onHandleContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div
                data-testid='modal'
                className={classNames(cln.Modal, mode, [className])}
            >
                <div
                    data-testid='overlay'
                    className={cln.overlay}
                    onClick={onHandleClose}
                >
                    <div
                        data-testid='content'
                        className={cln.content}
                        onClick={onHandleContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
