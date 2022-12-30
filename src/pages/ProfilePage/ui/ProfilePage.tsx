import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

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
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const asyncReducersList: AsyncReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    const dispatch = useAppDispatch();

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    const profileData = useSelector(selectProfileForm);
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const readOnly = useSelector(selectReadOnly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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
        <>
            <ProfileHeader
                readOnly={readOnly}
            />
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
        </>
    );
});

export default ProfilePage;
