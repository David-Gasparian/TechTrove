import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextALign, TextTheme } from 'shared/ui/Text/Text';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profileSchema';
import cln from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    profileData?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onHandleChangeName?: (value: string) => void;
    onHandleChangeLastName?: (value: string) => void;
    onHandleChangeCity?: (value: string) => void;
    onHandleChangeUserName: (value: string) => void;
    onHandleChangeAge: (value: string) => void;
    onHandleChangeAvatar: (value: string) => void;
    onHandleChangeCurrency: (value: Currency) => void;
    onHandleChangeCountry: (value: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        error,
        isLoading,
        profileData,
        readOnly,
        onHandleChangeAge,
        onHandleChangeAvatar,
        onHandleChangeUserName,
        onHandleChangeCity,
        onHandleChangeLastName,
        onHandleChangeName,
        onHandleChangeCurrency,
        onHandleChangeCountry,
    } = props;

    if (error) {
        return (
            <div
                className={classNames(cln.ProfileCard, {}, [className, cln.error])}
            >
                <Text
                    title={t('something_went_wrong')}
                    text={t('refresh_the_page')}
                    theme={TextTheme.ERROR}
                    align={TextALign.CENTER}
                />
            </div>
        );
    }

    if (isLoading) {
        return (
            <div
                className={classNames(cln.ProfileCard, {}, [className, cln.loading])}
            >
                <Loader />
            </div>
        );
    }

    return (
        <div
            className={classNames(cln.ProfileCard, {}, [className])}
        >
            <div
                className={cln.avatarWrapper}
            >
                {profileData?.avatar && (
                    <Avatar
                        src={profileData?.avatar}
                        size={100}
                        alt="avatar"
                    />
                )}
            </div>
            <div className={cln.inputs}>
                <AppInput
                    className={cln.input}
                    autoFocus={!readOnly}
                    readOnly={readOnly}
                    placeholder={t('name')}
                    value={profileData?.first}
                    onChange={onHandleChangeName}
                />
                <AppInput
                    className={cln.input}
                    readOnly={readOnly}
                    placeholder={t('lastname')}
                    value={profileData?.lastname}
                    onChange={onHandleChangeLastName}
                />
                <AppInput
                    className={cln.input}
                    readOnly={readOnly}
                    placeholder={t('age')}
                    value={String(profileData?.age)}
                    onChange={onHandleChangeAge}
                />
                <AppInput
                    className={cln.input}
                    readOnly={readOnly}
                    placeholder={t('city')}
                    value={profileData?.city}
                    onChange={onHandleChangeCity}
                />
                <AppInput
                    className={cln.input}
                    readOnly={readOnly}
                    placeholder={t('username')}
                    value={profileData?.username}
                    onChange={onHandleChangeUserName}
                />
                <AppInput
                    className={cln.input}
                    readOnly={readOnly}
                    placeholder={t('avatar')}
                    value={profileData?.avatar}
                    onChange={onHandleChangeAvatar}
                />
                <CurrencySelect
                    className={cln.input}
                    value={profileData?.currency}
                    onChange={onHandleChangeCurrency}
                    readOnly={readOnly}
                />
                <CountrySelect
                    className={cln.input}
                    value={profileData?.country}
                    onChange={onHandleChangeCountry}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
});
