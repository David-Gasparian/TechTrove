import { TFunction } from 'react-i18next';
import { ValidateProfileCodes } from '../../types/EditableProfileCardSchema';

export const getTranslatedErrors = (t: TFunction, errors?: ValidateProfileCodes[]) => {
    const translatedErrors: DeepPartial<Record<ValidateProfileCodes, string>> = {};

    errors?.forEach((error: ValidateProfileCodes) => {
        translatedErrors[error] = t(`${error}`);
    });

    return translatedErrors;
};
