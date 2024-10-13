import { memo, Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <div className={classNames('LoginModal', {}, [className])}>
            <Modal lazy isOpen={isOpen} onClose={onClose}>
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync onCloseModal={onClose} />
                </Suspense>
            </Modal>
        </div>
    );
});
