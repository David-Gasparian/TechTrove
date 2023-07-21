import { StateSchema } from 'app/provider/storeProvider';
import { selectCommentsError } from './selectCommentsError';

describe('selectCommentsError', () => {
    test('should return error text', () => {
        const errorText = 'error';

        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: errorText,
            },
        };
        expect(selectCommentsError(state as StateSchema)).toEqual(errorText);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { error: undefined },
        };
        expect(selectCommentsError(state as StateSchema)).toBe('');
    });
});
