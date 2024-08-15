import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { selectAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;

    const { t } = useTranslation('articles');
    const authData = useSelector(selectAuthData);
    const userId = authData?.id;

    const [rateArticle] = useRateArticle();
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userId ?? '',
    });

    const onHandleRateArticle = useCallback((rate: number, feedback?: string) => {
        try {
            rateArticle({
                articleId,
                userId: userId ?? '',
                rate,
                feedback,
            });
        } catch (e) {
            console.log('error ->', e);
        }
    }, [rateArticle, articleId, userId]);

    const onHandleCancel = useCallback((rate: number) => {
        onHandleRateArticle(rate);
    }, [onHandleRateArticle]);

    const onHandleAccept = useCallback((rate: number, feedback?: string) => {
        onHandleRateArticle(rate, feedback);
    }, [onHandleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <div
            className={className}
        >
            <RatingCard
                cancel={onHandleCancel}
                accept={onHandleAccept}
                rate={rating?.rate}
                title={t('rate_this_article')}
                feedbackTitle={t('feedback_title')}
                hasFeedback
            />
        </div>
    );
});

export default ArticleRating;
