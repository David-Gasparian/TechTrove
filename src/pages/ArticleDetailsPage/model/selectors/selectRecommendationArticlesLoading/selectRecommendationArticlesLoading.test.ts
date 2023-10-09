import { StateSchema } from 'app/provider/storeProvider';
import { selectRecommendationArticlesLoading } from './selectRecommendationArticlesLoading';

describe('selectRecommendationArticlesLoading', () => {
    test('should return loading info', () => {
        const isLoading = true;

        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendationArticles: {
                    isLoading,
                },
            },
        };
        expect(selectRecommendationArticlesLoading(state as StateSchema)).toEqual(isLoading);
    });
});
