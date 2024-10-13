import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentsList } from '@/entities/Comment';
import { Text } from '@/shared/ui/deprecated/Text';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { commentsSelectors } from '../../model/slice/articleDetailsPageCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchArticleDetailsComments/fetchCommentsByArticleId';
import { selectCommentsLoading } from '../../model/selectors/selectCommentsLoading/selectCommentsLoading';
import { AddCommentForArticle } from '../../model/services/AddCommentForArticle/AddCommentForArticle';

interface ArticleDetailsCommentsProps {
    id: string;
}

const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { id } = props;

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const comments = useSelector(commentsSelectors.selectAll);
    const isLoading = useSelector(selectCommentsLoading);

    useInitEffect(() => {
        if (!id) return;

        dispatch(fetchCommentsByArticleId({ id }));
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(AddCommentForArticle({ text }));
        },
        [dispatch],
    );

    return (
        <VStack gap={8} max>
            <Text title={t('articles_comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentsList isLoading={isLoading} comments={comments} />
        </VStack>
    );
});

export default ArticleDetailsComments;
