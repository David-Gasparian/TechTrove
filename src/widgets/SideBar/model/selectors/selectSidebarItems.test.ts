import { StateSchema } from 'app/provider/storeProvider';
import { selectSidebarItems } from './selectSidebarItems';

describe('selectSidebarItems', () => {
    test('if user is authorised the sidebar items length should be 4', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {},
            },
        };
        expect(selectSidebarItems(state as StateSchema)).toHaveLength(4);
    });

    test('sif user is not authorised the sidebar items length should be 2', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: undefined,
            },
        };
        expect(selectSidebarItems(state as StateSchema)).toHaveLength(2);
    });
});
