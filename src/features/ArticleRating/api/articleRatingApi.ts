import { RatingType } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    rate: number;
    feedback?: string;
    userId: string;
    articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<RatingType[], GetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: 'article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: 'article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;

export const useGetArticleRating = useGetArticleRatingQuery;
export const useRateArticle = useRateArticleMutation;
