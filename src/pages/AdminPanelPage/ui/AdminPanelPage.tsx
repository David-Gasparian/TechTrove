import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = memo(() => {
    const { t } = useTranslation('admin');

    return (
        <Page data-testid='AdminPanelPage'>
            {t('admin')}
        </Page>
    );
});

export default AdminPanelPage;
