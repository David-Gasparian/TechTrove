import { StateSchema } from 'app/provider/storeProvider';
import { selectArticlesLoading } from './selectArticlesLoading';

describe('selectArticlesLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: true,
            },
        };
        expect(selectArticlesLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
            },
        };
        expect(selectArticlesLoading(state as StateSchema)).toBe(false);
    });
});
