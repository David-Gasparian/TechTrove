import { StateSchema } from '@/app/provider/storeProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError', () => {
    test('should return error', () => {
        const error = 'some error';

        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(selectProfileError(state as StateSchema)).toEqual(error);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: undefined },
        };
        expect(selectProfileError(state as StateSchema)).toBe('');
    });
});
