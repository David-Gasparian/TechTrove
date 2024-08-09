import { StateSchema } from '@/app/provider/storeProvider';
import { selectCanEdit } from './selectCanEdit';

describe('selectCanEdit', () => {
    test('return true if article creator id and user id is the same', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                data: {
                    userId: '1',
                },
            },
            user: {
                authData: {
                    id: '1',
                },
            },
        };
        expect(selectCanEdit(state as StateSchema)).toEqual(true);
    });

    test('return false if this ids are different', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                data: {
                    userId: '2',
                },
            },
            user: {
                authData: {
                    id: '1',
                },
            },
        };

        expect(selectCanEdit(state as StateSchema)).toBe(false);
    });

    test('return false if one of these ids is missing', () => {
        const state: DeepPartial<StateSchema> = {
            article: {},
            user: {
                authData: {
                    id: '1',
                },
            },
        };

        expect(selectCanEdit(state as StateSchema)).toBe(false);
    });
});
