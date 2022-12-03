import {
    FC, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUserName';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('navbar');

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onHandleClick = useCallback(() => {
        onOpenModal();
    }, [onOpenModal]);

    return (
        <div className={classNames(cln.Navbar, {}, [className])}>
            <AppButton
                className={cln.loginBtn}
                theme={AppButtonTheme.INVERTED_CLEAR}
                onClick={onHandleClick}
            >
                {t('login')}
            </AppButton>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};
