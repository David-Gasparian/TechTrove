import { StateSchema } from 'app/provider/storeProvider';
import { selectArticlesPage } from './selectArticlesPage';

describe('selectArticlesPage', () => {
    test('should return 3', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                page: 3,
            },
        };
        expect(selectArticlesPage(state as StateSchema)).toEqual(3);
    });

    test('should return 1', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                page: undefined,
            },
        };
        expect(selectArticlesPage(state as StateSchema)).toBe(1);
    });
});
