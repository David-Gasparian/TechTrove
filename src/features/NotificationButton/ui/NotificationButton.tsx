import {
    memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Popover } from 'shared/ui/popups';
import Notification from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import cln from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <AppButton theme={AppButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon SVG={Notification} isInverted />
        </AppButton>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cln.notificationList} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
