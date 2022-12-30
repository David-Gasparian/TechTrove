import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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
}
