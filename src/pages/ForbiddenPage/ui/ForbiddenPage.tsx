import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

const ForbiddenPage: FC = memo(() => {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            {t('title')}
        </Page>
    );
});

export default ForbiddenPage;
