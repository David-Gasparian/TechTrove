import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
    test('should return empty text', () => {
        const loginFormData = {
            error: '',
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectLoginError(state as StateSchema)).toEqual('');
    });

    test('should return error text', () => {
        const error = 'some error';

        const loginFormData = {
            error,
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectLoginError(state as StateSchema)).toEqual(error);
    });
});
