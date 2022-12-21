import { FC, memo, useEffect } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';

const asyncReducersList: AsyncReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    return (
        <ProfileCard />
    );
});

export default ProfilePage;
