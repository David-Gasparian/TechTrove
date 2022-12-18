import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('main')}
        </div>
    );
});

export default MainPage;
