import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: FC = memo(() => {
    const { t } = useTranslation('articles');

    return (
        <div>
            {t('articles')}
        </div>
    );
});

export default ArticlesPage;
