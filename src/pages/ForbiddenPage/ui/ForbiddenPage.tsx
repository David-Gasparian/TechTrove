import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage: FC = memo(() => {
    const { t } = useTranslation('forbidden');

    return (
        <Page data-testid='ForbiddenPage'>
            {t('title')}
        </Page>
    );
});

export default ForbiddenPage;
