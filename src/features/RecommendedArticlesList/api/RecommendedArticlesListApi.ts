import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchRecommendationArticles: build.query<Article[], number>({
            query: (limit) => ({
                url: 'articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

const { useFetchRecommendationArticlesQuery } = recommendationsApi;

export const useFetchRecommendationArticle =
    useFetchRecommendationArticlesQuery;
