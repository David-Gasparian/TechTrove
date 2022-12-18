import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
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
