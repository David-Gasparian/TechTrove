import { Profile } from 'entities/Profile';
import { ValidateProfileCodes } from '../consts/consts';
export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    error?: string;
    isLoading: boolean;
    readOnly: boolean;
    validateErrors?: ValidateProfileCodes[];
}
