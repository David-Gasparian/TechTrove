import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <div
            className={classNames('LoginModal', {}, [className])}
        >
            <Modal
                lazy
                isOpen={isOpen}
                onClose={onClose}
            >
                <LoginForm />
            </Modal>
        </div>
    );
};
