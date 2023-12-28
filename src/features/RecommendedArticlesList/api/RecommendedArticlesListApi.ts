import { rtkApi } from 'shared/api/rtkApi';

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchRecommendationArticles: build.query({
            query: (limit: number) => ({
                url: 'articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useFetchRecommendationArticlesQuery } = extendedApi;
