import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileCodes {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency,
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    error?: string;
    isLoading: boolean;
    readOnly: boolean;
    validateErrors?: ValidateProfileCodes[];
}
