import { StateSchema } from 'app/provider/storeProvider';

export const selectRecommendationArticlesLoading = (state: StateSchema) => state?.articleDetailsPage
    ?.recommendationArticles.isLoading;
