import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { selectUserPassword } from '../../model/selectors/selectUserPassword/selectUserPassword';
import { selectUserName } from '../../model/selectors/selectUserName/selectUserName';
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading';
import { authByUserName } from '../../model/services/AuthByUserName/AuthByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cln from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onCloseModal?: () => void;
}

const asyncReducersList: AsyncReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onCloseModal,
    } = props;

    const { t } = useTranslation('navbar');
    const dispatch = useAppDispatch();
    const password = useSelector(selectUserPassword);
    const username = useSelector(selectUserName);
    const error = useSelector(selectLoginError);
    const isLoading = useSelector(selectIsLoading);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    const onHandleChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onHandleChangeUserPassword = useCallback((value: string) => {
        dispatch(loginActions.setUserPassword(value));
    }, [dispatch]);

    const onHandleLoginClick = useCallback(async () => {
        const result = await dispatch(authByUserName({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onCloseModal?.();
        }
    }, [onCloseModal, username, password, dispatch]);

    return (
        <div
            data-testid='loginForm'
            className={classNames(cln.LoginForm, {}, [className])}
        >
            <Text title={t('form_authorization')} />
            {error && (
                <Text
                    data-testid='errorText'
                    theme={TextTheme.ERROR}
                    text={t(error)}
                />
            )}
            <AppInput
                data-testid='userName'
                autoFocus
                placeholder={t('username')}
                value={username}
                onChange={onHandleChangeUserName}
                className={cln.input}
                type="text"
            />
            <AppInput
                data-testid='password'
                placeholder={t('password')}
                value={password}
                onChange={onHandleChangeUserPassword}
                className={cln.input}
                type="text"
            />
            <AppButton
                disabled={isLoading}
                data-testid='loginBtn'
                theme={AppButtonTheme.OUTLINED}
                className={cln.loginBtn}
                onClick={onHandleLoginClick}
            >
                {t('login')}
            </AppButton>
        </div>
    );
});

export default LoginForm;
