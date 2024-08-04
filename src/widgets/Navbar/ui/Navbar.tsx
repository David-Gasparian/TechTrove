import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUserName';
import {
    selectAuthData,
} from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation('navbar');
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

    if (authData) {
        return (
            <header className={classNames(cln.Navbar, {}, [className])}>
                <HStack className={cln.rightPart} gap={16} align="center">
                    <NotificationButton />
                    <AvatarDropdown avatar={authData?.avatar || ''} />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cln.Navbar, {}, [className])}>
            <AppButton
                className={cln.rightPart}
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
