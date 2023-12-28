import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { Page } from 'widgets/Page/Page';
import { RecommendedArticlesList } from 'features/RecommendedArticlesList';
import { articleDetailsPageSlice } from '../../model/slice';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import cln from './ArticleDetailsPage.module.scss';

const asyncReducersList: AsyncReducersList = {
    articleDetailsPage: articleDetailsPageSlice,
};

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    if (!id) {
        return (
            <Page className={cln.articleNotFound}>
                <Text className={cln.commentsTitle} title={t('article_not_found')} />
            </Page>
        );
    }

    return (
        <Page>
            <div>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <RecommendedArticlesList />
                <ArticleDetailsComments id={id} />
            </div>
        </Page>
    );
});

export default ArticleDetailsPage;
