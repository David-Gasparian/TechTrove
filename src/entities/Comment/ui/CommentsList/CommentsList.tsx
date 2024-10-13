import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/commentTypes';
import { CommentCard } from '../CommentCard/CommentCard';
import cln from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
    const { className, comments = [], isLoading = false } = props;

    const { t } = useTranslation('articles');

    if (isLoading) {
        return (
            <div className={classNames(cln.CommentsList, {}, [className])}>
                <CommentCard isLoading className={cln.commentCard} />
                <CommentCard isLoading className={cln.commentCard} />
                <CommentCard isLoading className={cln.commentCard} />
            </div>
        );
    }

    return (
        <div className={classNames(cln.CommentsList, {}, [className])}>
            {comments.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                        className={cln.commentCard}
                    />
                ))
            ) : (
                <Text text={t('article_comments_is_empty')} />
            )}
        </div>
    );
});
