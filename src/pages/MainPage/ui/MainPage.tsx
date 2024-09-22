import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');

    return <Page data-testid="MainPage">{t('main')}</Page>;
});

export default MainPage;
