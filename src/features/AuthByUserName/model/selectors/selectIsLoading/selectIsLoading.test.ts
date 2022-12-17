import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectIsLoading } from './selectIsLoading';

describe('selectIsLoading', () => {
    test('should return false', () => {
        const loginFormData = {
            isLoading: false,
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return true', () => {
        const loginFormData = {
            isLoading: true,
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectIsLoading(state as StateSchema)).toEqual(true);
    });

    test('if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectIsLoading(state as StateSchema)).toBe(false);
    });
});
