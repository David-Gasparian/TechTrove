import { profileReducer } from 'entities/Profile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';

const asyncReducersList: AsyncReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    const { t } = useTranslation('profile');

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    return (
        <div>
            {t('profile')}
        </div>
    );
});

export default ProfilePage;
