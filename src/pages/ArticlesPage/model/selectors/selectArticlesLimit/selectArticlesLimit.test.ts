import { StateSchema } from '@/app/provider/storeProvider';
import { selectArticlesLimit } from './selectArticlesLimit';

describe('selectArticlesLimit', () => {
    test('should return 2', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                limit: 2,
            },
        };
        expect(selectArticlesLimit(state as StateSchema)).toEqual(2);
    });

    test('should return 3', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                limit: undefined,
            },
        };
        expect(selectArticlesLimit(state as StateSchema)).toBe(3);
    });
});
