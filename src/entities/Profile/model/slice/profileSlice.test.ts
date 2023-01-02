import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
    test('set readOnly', () => {
        const returnResult: DeepPartial<ProfileSchema> = {
            readOnly: true,
        };

        expect(profileReducer(returnResult as ProfileSchema, profileActions.setreadOnly(true))).toEqual({ readOnly: true });
    });

    test('cancel changed fields', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: { first: 'first', lastname: 'lastname' },
            form: { first: 'formFirst', lastname: 'formLastName' },
        };

        const result: DeepPartial<ProfileSchema> = {
            data: { first: 'first', lastname: 'lastname' },
            form: { first: 'first', lastname: 'lastname' },
        };

        expect(profileReducer(state as ProfileSchema, profileActions.clearForm())).toEqual(result);
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { first: 'first', lastname: 'lastName' },
        };

        const result: DeepPartial<ProfileSchema> = {
            form: { first: 'new firstName', lastname: 'new lastName' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updatePfofile({ first: 'new firstName', lastname: 'new lastName' }),
        )).toEqual(result);
    });

    test('update Profile extraReducer panding', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [],
            isLoading: false,
        };

        const result: DeepPartial<ProfileSchema> = {
            validateErrors: undefined,
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual(result);
    });

    test('update Profile extraReducer fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: undefined,
            form: undefined,
            readOnly: false,
        };

        const data = {
            first: 'first',
            lastname: 'lastname',
        };

        const result: DeepPartial<ProfileSchema> = {
            isLoading: false,
            data,
            form: data,
            readOnly: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data as Profile, ''),
        )).toEqual(result);
    });
});
