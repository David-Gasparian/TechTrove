import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { articleDetailsPageReducer, commentsSelectors } from '../model/slice/articleDetailsPageSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchArticleDetailsComments/fetchCommentsByArticleId';
import cln from './ArticleDetailsPage.module.scss';
import { selectCommentsLoading } from '../model/selectors/selectCommentsLoading/selectCommentsLoading';

const asyncReducersList: AsyncReducersList = {
    articleDetailsComments: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector(commentsSelectors.selectAll);
    const isLoading = useSelector(selectCommentsLoading);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    useInitEffect(() => {
        if (!id) return;

        dispatch(fetchCommentsByArticleId({ id }));
    });

    if (!id) {
        return <div>{t('article_not_found')}</div>;
    }

    return (
        <div className={cln.ArticleDetailsPage}>
            <ArticleDetails id={id} />
            <Text className={cln.commentsTitle} title={t('comments')} />
            <CommentsList isLoading={isLoading} comments={comments} />
        </div>
    );
});

export default ArticleDetailsPage;
