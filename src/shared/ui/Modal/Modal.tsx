import { FC } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cln from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });

    if (lazy && !isMounted) {
        return null;
    }

    const mode: Mode = {
        [cln.opened]: isOpen,
        [cln.closing]: isClosing,
    };

    return (
        <Portal>
            <div
                data-testid="modal"
                className={classNames(cln.Modal, mode, [className])}
            >
                <Overlay data-testid="overlay" onClick={close} />
                <div data-testid="content" className={cln.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
