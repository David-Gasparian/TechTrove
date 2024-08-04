import {
    memo,
} from 'react';

import { Popover } from 'shared/ui/popups';
import Notification from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import cln from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={
                <Icon SVG={Notification} isInverted />
            }
        >
            <NotificationList className={cln.notificationList} />
        </Popover>
    );
});
