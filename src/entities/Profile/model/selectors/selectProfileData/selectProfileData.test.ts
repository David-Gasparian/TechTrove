import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { Country, Currency } from 'shared/consts/common';
import { Profile } from '../../types/profileSchema';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData', () => {
    test('should return profile data', () => {
        const profileData: DeepPartial<Profile> = {
            first: 'first',
            lastname: 'lastname',
            age: 22,
            currency: Currency.DOL,
            country: Country.AMERICA,
            city: 'city',
            username: 'username',
            avatar: 'avatar',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData,
            },
        };
        expect(selectProfileData(state as StateSchema)).toEqual(profileData);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data: undefined },
        };
        expect(selectProfileData(state as StateSchema)).toBe(undefined);
    });
});
