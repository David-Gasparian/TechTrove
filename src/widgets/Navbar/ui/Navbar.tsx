import {
    FC, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Modal } from 'shared/ui/Modal/Modal';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('navbar');

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    const onHandleClick = useCallback(() => {
        onToggleModal();
    }, [onToggleModal]);

    return (
        <div className={classNames(cln.Navbar, {}, [className])}>
            <AppButton
                className={cln.loginBtn}
                theme={AppButtonTheme.INVERTED_CLEAR}
                onClick={onHandleClick}
            >
                {t('signIn')}
            </AppButton>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={onToggleModal}
            >
                {
                // eslint-disable-next-line max-len
                    t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, totam provident minima ipsa saepe voluptates, laudantium veniam at quis odit aspernatur repellendus accusamus culpa impedit nam et quisquam maiores corrupti.')
                }
            </Modal>
        </div>
    );
};
