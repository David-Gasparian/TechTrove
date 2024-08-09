import { StateSchema } from '@/app/provider/storeProvider';
import { selectArticlesHasMore } from './selectArticlesHasMore';

describe('selectArticlesHasMore', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                hasMore: true,
            },
        };
        expect(selectArticlesHasMore(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                hasMore: undefined,
            },
        };
        expect(selectArticlesHasMore(state as StateSchema)).toBe(false);
    });
});
