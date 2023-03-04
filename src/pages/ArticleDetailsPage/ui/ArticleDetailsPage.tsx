import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');

    return (
        <div>
            {t('article_details')}
        </div>
    );
});

export default ArticleDetailsPage;
