import { StateSchema } from 'app/provider/storeProvider';

import { ValidateProfileCodes } from '../../types/EditableProfileCardSchema';
import { selectValidateErrors } from './selectValidateErrors';

describe('selectValidateErrors', () => {
    test('should return validateError', () => {
        const errors = [ValidateProfileCodes.INCORRECT_USER_DATA];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(selectValidateErrors(state as StateSchema)).toEqual(errors);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: undefined },
        };
        expect(selectValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
