import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/sidebarTypes';
import cln from './SideBarItem.module.scss';

interface SideBarItemProps {
    className?: string;
    collapsed?: boolean;
    item: SidebarItemType;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const {
        className,
        collapsed,
        item,
    } = props;

    const { t } = useTranslation(item.text);
    const isAuth = useSelector(selectAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            data-testid='sidebar-item'
            className={classNames(
                cln.item,
                { [cln.collapsed]: collapsed },
                [className],
            )}
            to={item.path}
        >
            <item.Icon className={cln.icon} />
            <span>{t(item.text)}</span>
        </AppLink>
    );
});
