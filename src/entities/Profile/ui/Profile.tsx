import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

interface ProfileProps {
    className?: string;
}

const Profile = memo((props: ProfileProps) => {
    const { t } = useTranslation('');

    const {
        className,
    } = props;

    return (
        <div
            className={classNames('', {}, [className])}
        >
            {t('Profile')}
        </div>
    );
});

export default Profile;
