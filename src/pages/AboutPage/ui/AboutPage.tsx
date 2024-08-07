import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('about')}
        </Page>
    );
});

export default AboutPage;
