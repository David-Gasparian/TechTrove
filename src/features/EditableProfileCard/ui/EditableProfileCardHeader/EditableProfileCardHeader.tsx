import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { HStack } from 'shared/ui/Stack';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
    readOnly?: boolean;
    canEdit?: boolean;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
            gap={8}
            justify="spaceBetween"
            testId='header'
            align='center'
            className={classNames('', {}, [className])}
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
