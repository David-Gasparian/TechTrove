import { Profile } from 'entities/Profile';

export enum ValidateProfileCodes {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    error?: string;
    isLoading: boolean;
    readOnly: boolean;
    validateErrors?: ValidateProfileCodes[];
}
