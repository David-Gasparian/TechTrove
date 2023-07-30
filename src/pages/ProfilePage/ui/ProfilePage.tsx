import {
    FC, memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileReducer,
    selectProfileForm,
    selectProfileError,
    selectProfileIsLoading,
    selectReadOnly,
    selectValidateErrors,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { selectAuthData } from 'entities/User';
import { Page } from 'widgets/Page/Page';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { getTranslatedErrors } from '../model/services/getTranslatedErrors';

const asyncReducersList: AsyncReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const { id: profileId } = useParams<{id: string}>();

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    const profileData = useSelector(selectProfileForm);
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const readOnly = useSelector(selectReadOnly);
    const validateErrors = useSelector(selectValidateErrors);
    const authData = useSelector(selectAuthData);
    const canEdit = authData?.id === profileData?.id;

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
        <Page>
            <ProfileHeader
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
        </Page>
    );
});

export default ProfilePage;
