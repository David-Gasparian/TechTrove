import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams();

    if (!id) {
        return <div>{t('article_not_found')}</div>;
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
});

export default ArticleDetailsPage;
