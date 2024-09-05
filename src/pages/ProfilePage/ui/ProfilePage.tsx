import {
    FC, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

const ProfilePage: FC = memo(() => {
    const { t } = useTranslation('profile');
    const { id: profileId } = useParams<{id: string}>();

    if (!profileId) {
        return (
            <Text
                text={t('PROFILE_NOT_FOUND')}
            />
        );
    }

    return (
        <Page data-testid='ProfilePage'>
            <EditableProfileCard profileId={profileId} />
        </Page>
    );
});

export default ProfilePage;
