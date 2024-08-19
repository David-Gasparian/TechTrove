import {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '@/shared/ui/popups';
import { isRoleAdmin, isRoleManager, userActions } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { appRoutePaths } from '@/shared/consts/router';

interface AvatarDropdownProps {
    className?: string;
    avatar: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className, avatar } = props;

    const { t } = useTranslation('admin');

    const isAdmin = useSelector(isRoleAdmin);
    const isManager = useSelector(isRoleManager);
    const dispatch = useDispatch();

    const onHandleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('admin'),
                    href: appRoutePaths.admin,
                }] : []),
                {
                    content: t('logout'),
                    onClick: onHandleLogout,
                },
            ]}
            trigger={<Avatar size={30} src={avatar} />}
        />
    );
});
