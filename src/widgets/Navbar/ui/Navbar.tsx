import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUserName';
import { selectAuthData, userActions } from 'entities/User';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const authData = useSelector(selectAuthData);

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onHandleOpenModal = useCallback(() => {
        onOpenModal();
    }, [onOpenModal]);

    const onHandleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cln.Navbar, {}, [className])}>
                <Dropdown
                    className={cln.loginBtn}
                    direction="bottom left"
                    items={[
                        {
                            content: t('logout'),
                            onClick: onHandleLogout,
                        },
                        {
                            content: t('logout'),
                            onClick: onHandleLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cln.Navbar, {}, [className])}>
            <AppButton
                className={cln.loginBtn}
                theme={AppButtonTheme.INVERTED_CLEAR}
                onClick={onHandleOpenModal}
            >
                {t('login')}
            </AppButton>
            {isAuthModalOpen && (
                <LoginModal
                    isOpen={isAuthModalOpen}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
