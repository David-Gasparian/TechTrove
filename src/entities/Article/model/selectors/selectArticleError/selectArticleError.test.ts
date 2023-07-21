import { StateSchema } from 'app/provider/storeProvider';
import { selectArticleError } from './selectArticleError';

describe('selectArticleError', () => {
    test('should return error text', () => {
        const errorText = 'error';

        const state: DeepPartial<StateSchema> = {
            article: {
                error: errorText,
            },
        };
        expect(selectArticleError(state as StateSchema)).toEqual(errorText);
    });

    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            article: { error: undefined },
        };
        expect(selectArticleError(state as StateSchema)).toBe('');
    });
});
