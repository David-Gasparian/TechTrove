import { StateSchema } from 'app/provider/storeProvider';
import { selectUserInited } from './selectUserInited';

describe('selectUserInited', () => {
    test('if user is not inited', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: false,
            },
        };
        expect(selectUserInited(state as StateSchema)).toEqual(undefined);
    });

    test('if user is inited', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };
        expect(selectUserInited(state as StateSchema)).toEqual(true);
    });
});
