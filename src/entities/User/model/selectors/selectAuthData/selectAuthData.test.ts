import { StateSchema } from 'app/provider/storeProvider';
import { selectAuthData } from './selectAuthData';

describe('selectAuthData', () => {
    test('if user is not authorized', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: undefined,
            },
        };
        expect(selectAuthData(state as StateSchema)).toEqual(undefined);
    });

    test('if user is authorized', () => {
        const user = {
            username: 'userName',
            id: '1',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: user,
            },
        };
        expect(selectAuthData(state as StateSchema)).toEqual(user);
    });
});
