import { StateSchema } from 'app/provider/storeProvider';
import { selectReadOnly } from './selectReadonly';

describe('selectReadOnly', () => {
    test('should return false', () => {
        const profileData = {
            readOnly: false,
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectReadOnly(state as StateSchema)).toEqual(false);
    });

    test('should return true', () => {
        const profileData = {
            readOnly: true,
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectReadOnly(state as StateSchema)).toEqual(true);
    });

    test('if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectReadOnly(state as StateSchema)).toBe(false);
    });
});
