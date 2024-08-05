import { memo, ReactNode } from 'react';

import { classNames, Mode } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { useTheme } from 'app/provider/themeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cln from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({ animationDelay: 300, isOpen, onClose });

    if (lazy && !isMounted) {
        return null;
    }

    const mode: Mode = {
        [cln.opened]: isOpen,
        [cln.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cln.Drawer, mode, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cln.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
