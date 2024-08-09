import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton/AppButton';
import { HStack } from '@/shared/ui/Stack';
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
            testId='EditableProfileCardHeader.header'
            align='center'
            className={classNames('', {}, [className])}
        >
            <Text title={t('profile')} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <AppButton
                            data-testid='EditableProfileCardHeader.editBtn'
                            onClick={onHandleEdit}
                            theme={AppButtonTheme.OUTLINED}
                        >
                            {t('edit')}
                        </AppButton>
                    ) : (
                        <HStack max gap={4}>
                            <AppButton
                                data-testid='EditableProfileCardHeader.cancelBtn'
                                onClick={onHandleCancelEdit}
                                theme={AppButtonTheme.OUTLINED_RED}
                            >
                                {t('cancel')}
                            </AppButton>
                            <AppButton
                                data-testid='EditableProfileCardHeader.saveBtn'
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
