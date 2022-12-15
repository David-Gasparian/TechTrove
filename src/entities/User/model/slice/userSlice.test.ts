import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { userStorage } from 'shared/lib/storage/adapters/userAdapter';
import { User, UserSchema } from '../types/userSchema';
import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
    test('set authData', () => {
        const user: User = {
            id: 1,
            name: 'username',
        };
        const returnResult: UserSchema = {
            authData: user,
        };

        expect(userReducer({ authData: null }, userActions.setAuthUser(user))).toEqual(returnResult);
    });

    test('init auth user', () => {
        const user: User = {
            id: 1,
            name: 'username',
        };
        const result: UserSchema = {
            authData: user,
        };

        userStorage.setUser(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));

        expect(userReducer({ authData: null }, userActions.initAuthUser())).toEqual(result);
    });

    test('logout', () => {
        const state: UserSchema = {
            authData: {
                id: 1,
                name: 'username',
            },
        };

        expect(userReducer(state, userActions.logout())).toEqual({ authData: null });
    });
});
