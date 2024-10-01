import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import {
    AsyncReducersList,
    useAsyncReducer,
} from '@/shared/lib/hooks/useAsyncReducer';
import { RecommendedArticlesList } from '@/features/RecommendedArticlesList';
import { ArticleRating } from '@/features/ArticleRating';
import { Page } from '@/widgets/Page';
import { getFeatureFlag } from '@/shared/lib/features';
import { articleDetailsPageSlice } from '../../model/slice';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import cln from './ArticleDetailsPage.module.scss';

const asyncReducersList: AsyncReducersList = {
    articleDetailsPage: articleDetailsPageSlice,
};

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    if (!id) {
        return (
            <Page className={cln.articleNotFound}>
                <Text
                    className={cln.commentsTitle}
                    title={t('article_not_found')}
                />
            </Page>
        );
    }

    return (
        <Page>
            <div>
                <ArticleDetailsPageHeader id={id} />
                <ArticleDetails id={id} />
                {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                <RecommendedArticlesList />
                <ArticleDetailsComments id={id} />
            </div>
        </Page>
    );
});

export default ArticleDetailsPage;
