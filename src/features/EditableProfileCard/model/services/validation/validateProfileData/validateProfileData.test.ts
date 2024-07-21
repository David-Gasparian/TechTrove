import { Profile } from 'entities/Profile';

import { ValidateProfileCodes } from '../../../../model/types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const profileData: DeepPartial<Profile> = {
    first: 'first',
    lastname: 'lastname',
    age: 22,
    avatar: 'avatar',
    city: 'city',
    username: 'username',
};

describe('validateProfileData', () => {
    test('with correct data', () => {
        expect(validateProfileData({ ...profileData as Profile })).toEqual([]);
    });

    test('with incorrect age', () => {
        expect(validateProfileData({ ...profileData as Profile, age: 0 })).toEqual([ValidateProfileCodes.INCORRECT_AGE]);
    });

    test('with incorrect data', () => {
        expect(validateProfileData({
            ...profileData as Profile,
            first: '',
            age: 0,
            username: '',
        })).toEqual(
            [
                ValidateProfileCodes.INCORRECT_USER_DATA,
                ValidateProfileCodes.INCORRECT_AGE,
                ValidateProfileCodes.INCORRECT_USER_NAME,
            ],
        );
    });

    test('with empty profile', () => {
        expect(validateProfileData()).toEqual([ValidateProfileCodes.NO_DATA]);
    });
});
