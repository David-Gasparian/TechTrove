import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { HStack } from 'shared/ui/Stack';
import { updateProfileData } from 'entities/Profile';
import cln from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
    className?: string;
    readOnly?: boolean;
    canEdit?: boolean;
}

export const ProfileHeader = memo((props: ProfileHeaderProps) => {
    const {
        className,
        readOnly,
        canEdit,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useDispatch();

    const onHandleEdit = useCallback(() => {
        dispatch(profileActions.setreadOnly(false));
    }, [dispatch]);

    const onHandleCancelEdit = useCallback(() => {
        dispatch(profileActions.setreadOnly(true));
        dispatch(profileActions.clearForm());
    }, [dispatch]);

    const onHandleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            max
            justify="spaceBetween"
            testId='header'
            align='center'
            className={classNames(cln.header, {}, [className])}
        >
            <Text title={t('profile')} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <div
                            data-testid='editBtn'
                        >
                            <AppButton
                                onClick={onHandleEdit}
                                theme={AppButtonTheme.OUTLINED}
                            >
                                {t('edit')}
                            </AppButton>
                        </div>
                    ) : (
                        <HStack max gap={4}>
                            <AppButton
                                data-testid='cancelBtn'
                                onClick={onHandleCancelEdit}
                                theme={AppButtonTheme.OUTLINED_RED}
                            >
                                {t('cancel')}
                            </AppButton>
                            <AppButton
                                data-testid='saveBtn'
                                onClick={onHandleSave}
                                theme={AppButtonTheme.OUTLINED}
                            >
                                {t('save')}
                            </AppButton>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
});
