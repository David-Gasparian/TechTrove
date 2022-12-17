import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectUserPassword } from './selectUserPassword';

describe('selectUserPassword', () => {
    test('should return empty text', () => {
        const loginFormData = {
            password: '',
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectUserPassword(state as StateSchema)).toEqual('');
    });

    test('should return user password', () => {
        const password = 'some password';

        const loginFormData = {
            password,
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectUserPassword(state as StateSchema)).toEqual(password);
    });

    test('if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectUserPassword(state as StateSchema)).toBe('');
    });
});
