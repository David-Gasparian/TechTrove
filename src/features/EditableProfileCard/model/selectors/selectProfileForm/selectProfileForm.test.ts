import { StateSchema } from '@/app/provider/storeProvider';
import { Profile } from '@/entities/Profile';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm', () => {
    test('should return profile data', () => {
        const profileData: DeepPartial<Profile> = {
            first: 'first',
            lastname: 'lastname',
            age: 22,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profileData,
            },
        };
        expect(selectProfileForm(state as StateSchema)).toEqual(profileData);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { form: undefined },
        };
        expect(selectProfileForm(state as StateSchema)).toBe(undefined);
    });
});
