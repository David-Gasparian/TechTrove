import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/AppButton/AppButton';

// test ErrorBoundary
export const BugButton: FC = () => {
    const { t } = useTranslation('translation');

    const [isError, setIsError] = useState(false);

    const onHandleClick = () => setIsError(true);

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        <AppButton onClick={onHandleClick}>
            {t('throw_error')}
        </AppButton>
    );
};
