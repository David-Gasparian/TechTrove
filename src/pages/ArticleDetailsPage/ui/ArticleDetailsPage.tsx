import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articleDetailsPageReducer, commentsSelectors } from '../model/slice/articleDetailsPageSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchArticleDetailsComments/fetchCommentsByArticleId';
import { selectCommentsLoading } from '../model/selectors/selectCommentsLoading/selectCommentsLoading';
import { AddCommentForArticle } from '../model/services/AddCommentForArticle/AddCommentForArticle';
import cln from './ArticleDetailsPage.module.scss';

const asyncReducersList: AsyncReducersList = {
    articleDetailsComments: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(commentsSelectors.selectAll);
    const isLoading = useSelector(selectCommentsLoading);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    useInitEffect(() => {
        if (!id) return;

        dispatch(fetchCommentsByArticleId({ id }));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(AddCommentForArticle({ text }));
    }, [dispatch]);

    if (!id) {
        return <div>{t('article_not_found')}</div>;
    }

    return (
        <div className={cln.ArticleDetailsPage}>
            <ArticleDetails id={id} />
            <Text className={cln.commentsTitle} title={t('comments')} />
            <div className={cln.addCommentWrapper}>
                <AddCommentForm onSendComment={onSendComment} />
            </div>
            <CommentsList isLoading={isLoading} comments={comments} />
        </div>
    );
});

export default ArticleDetailsPage;
