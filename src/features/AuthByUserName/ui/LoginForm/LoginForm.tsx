import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import cln from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation('navbar');
    const {
        className,
    } = props;

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onHandleChangeUserName = useCallback((value: string) => {
        setUserName(value);
    }, []);

    const onHandleChangeUserPassword = useCallback((value: string) => {
        setUserPassword(value);
    }, []);

    return (
        <div
            data-testid='loginForm'
            className={classNames(cln.LoginForm, {}, [className])}
        >
            <AppInput
                data-testid='userName'
                autoFocus
                placeholder={t('username')}
                value={userName}
                onChange={onHandleChangeUserName}
                className={cln.input}
                type="text"
            />
            <AppInput
                data-testid='password'
                placeholder={t('password')}
                value={userPassword}
                onChange={onHandleChangeUserPassword}
                className={cln.input}
                type="text"
            />
            <AppButton
                data-testid='loginBtn'
                theme={AppButtonTheme.OUTLINED}
                className={cln.loginBtn}
            >
                {t('login')}
            </AppButton>
        </div>
    );
};
