import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectUserName } from './selectUserName';

describe('selectUserName', () => {
    test('should return empty text', () => {
        const loginFormData = {
            username: '',
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectUserName(state as StateSchema)).toEqual('');
    });

    test('should return user name', () => {
        const name = 'some name';

        const loginFormData = {
            username: name,
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectUserName(state as StateSchema)).toEqual(name);
    });
});
