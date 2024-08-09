import {
    memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { selectAuthData } from '@/entities/User';
import { AsyncReducersList, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { ProfileCard } from '@/entities/Profile';
import { VStack } from '@/shared/ui/Stack';
import { selectReadOnly } from '../../model/selectors/selectReadonly/selectReadonly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { selectProfileError } from '../../model/selectors/selectProfileError/selectProfileError';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectValidateErrors } from '../../model/selectors/selectValidateErrors/selectValidateErrors';
import { selectProfileForm } from '../../model/selectors/selectProfileForm/selectProfileForm';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getTranslatedErrors } from '../../model/services/getTranslatedErrors/getTranslatedErrors';

const asyncReducersList: AsyncReducersList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    className?: string;
    profileId: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const readOnly = useSelector(selectReadOnly);
    const authData = useSelector(selectAuthData);
    const profileData = useSelector(selectProfileForm);
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const validateErrors = useSelector(selectValidateErrors);
    const canEdit = authData?.id === profileData?.id;

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    const translatedErrors = getTranslatedErrors(t, validateErrors);

    useInitEffect(() => {
        dispatch(fetchProfileData({ id: profileId }));
    });

    const onHandleChangeName = useCallback((first: string) => {
        dispatch(profileActions.updatePfofile({ first }));
    }, [dispatch]);

    const onHandleChangeLastName = useCallback((lastname: string) => {
        dispatch(profileActions.updatePfofile({ lastname }));
    }, [dispatch]);

    const onHandleChangeCity = useCallback((city: string) => {
        dispatch(profileActions.updatePfofile({ city }));
    }, [dispatch]);

    const onHandleChangeUserName = useCallback((username: string) => {
        dispatch(profileActions.updatePfofile({ username }));
    }, [dispatch]);

    const onHandleChangeAge = useCallback((value: string) => {
        if (value && !/^\d+$/.test(value)) return;

        dispatch(profileActions.updatePfofile({ age: +value }));
    }, [dispatch]);

    const onHandleChangeAvatar = useCallback((avatar: string) => {
        dispatch(profileActions.updatePfofile({ avatar }));
    }, [dispatch]);

    const onHandleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updatePfofile({ currency }));
    }, [dispatch]);

    const onHandleChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updatePfofile({ country }));
    }, [dispatch]);

    return (
        <VStack gap={8} max className={classNames('', {}, [className])}>
            <EditableProfileCardHeader
                canEdit={canEdit}
                readOnly={readOnly}
            />
            {
                !!validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={translatedErrors[error]}
                    />
                ))
            }
            <ProfileCard
                profileData={profileData}
                error={error}
                isLoading={isLoading}
                readOnly={readOnly}
                onHandleChangeName={onHandleChangeName}
                onHandleChangeLastName={onHandleChangeLastName}
                onHandleChangeCity={onHandleChangeCity}
                onHandleChangeUserName={onHandleChangeUserName}
                onHandleChangeAge={onHandleChangeAge}
                onHandleChangeAvatar={onHandleChangeAvatar}
                onHandleChangeCurrency={onHandleChangeCurrency}
                onHandleChangeCountry={onHandleChangeCountry}
            />
        </VStack>
    );
});
