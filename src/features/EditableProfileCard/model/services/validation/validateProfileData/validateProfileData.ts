import { Profile } from 'entities/Profile';
import { ValidateProfileCodes } from '../../../../model/types/EditableProfileCardSchema';
import { validateUserAge } from '../validateUserAge/validateUserAge';

export const validateProfileData = (profile?: Profile): ValidateProfileCodes[] => {
    if (!profile) {
        return [ValidateProfileCodes.NO_DATA];
    }

    const {
        age, avatar, city, first, username, lastname,
    } = profile;

    const errors: ValidateProfileCodes[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileCodes.INCORRECT_USER_DATA);
    }

    if (validateUserAge(age)) {
        errors.push(ValidateProfileCodes.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileCodes.INCORRECT_CITY);
    }

    if (!avatar) {
        errors.push(ValidateProfileCodes.INCORRECT_AVATAR);
    }

    if (!username) {
        errors.push(ValidateProfileCodes.INCORRECT_USER_NAME);
    }

    return errors;
};
