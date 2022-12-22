import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('set user name', () => {
        const username = 'name';
        const loginData: DeepPartial<LoginSchema> = {
            username: '',
        };

        expect(loginReducer(loginData as LoginSchema, loginActions.setUserName(username))).toEqual({ username });
    });

    test('set password', () => {
        const password = 'password';
        const loginData: DeepPartial<LoginSchema> = {
            password: '',
        };

        expect(loginReducer(loginData as LoginSchema, loginActions.setUserPassword(password))).toEqual({ password });
    });

    test('check empty state', () => {
        expect(loginReducer(undefined, { type: '' })).toEqual({
            isLoading: false,
            password: '',
            username: '',
            error: '',
        });
    });
});
