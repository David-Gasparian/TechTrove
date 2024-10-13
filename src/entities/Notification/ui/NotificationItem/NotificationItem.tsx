import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { NotificationType } from '../../model/types/notificationType';
import cln from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    notification: NotificationType;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cln.NotificationItem, {}, [className])}
        >
            <Text title={notification.title} text={notification.description} />
        </Card>
    );

    if (notification.href) {
        return (
            <a
                target="_blank"
                className={cln.link}
                href={notification.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
