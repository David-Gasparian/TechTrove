import { StateSchema } from 'app/provider/storeProvider';
import { selectArticlesInited } from './selectArticlesInited';

describe('selectArticlesInited', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                _inited: true,
            },
        };
        expect(selectArticlesInited(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                _inited: false,
            },
        };
        expect(selectArticlesInited(state as StateSchema)).toBe(false);
    });

    test('if _inited is undefined should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                _inited: undefined,
            },
        };
        expect(selectArticlesInited(state as StateSchema)).toBe(false);
    });
});
