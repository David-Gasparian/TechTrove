import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { selectProfileError } from '../../model/selectors/selectProfileError/selectProfileError';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import cln from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(selectProfileData);
    const error = useSelector(selectProfileError);
    const isLoadin = useSelector(selectProfileIsLoading);

    const {
        className,
    } = props;

    return (
        <div
            className={classNames(cln.ProfileCard, {}, [className])}
        >
            <div className={cln.header}>
                <Text title={t('profile')} />
                <AppButton theme={AppButtonTheme.OUTLINED}>
                    {t('edit')}
                </AppButton>
            </div>

            <div className={cln.inputs}>
                <AppInput placeholder={t('name')} value={profileData?.first} />
                <AppInput placeholder={t('lastname')} value={profileData?.lastname} />
            </div>
        </div>
    );
});
