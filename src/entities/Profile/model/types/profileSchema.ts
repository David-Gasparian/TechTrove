import { Country, Currency } from 'shared/consts/common';

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
    error?: string;
    isLoading: boolean;
    readonly: boolean;
}
