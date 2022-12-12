import { FC, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync />
                </Suspense>
            </Modal>
        </div>
    );
};
