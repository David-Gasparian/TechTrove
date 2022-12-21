import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError', () => {
    test('should return empty text', () => {
        const profileData = {
            error: '',
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectProfileError(state as StateSchema)).toEqual('');
    });

    test('should return error text', () => {
        const error = 'some error';

        const profileData = {
            error,
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectProfileError(state as StateSchema)).toEqual(error);
    });

    test('if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileError(state as StateSchema)).toBe('');
    });
});
