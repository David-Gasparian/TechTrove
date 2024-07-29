import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { ValidateProfileCodes } from '../../consts/consts';
import { updateProfileData } from './updateProfileData';

const data = {
    first: 'David',
    lastname: 'Gasparyan',
    age: 22,
    currency: Currency.DOL,
    country: Country.AMERICA,
    city: 'Yerevan',
    username: 'admin',
    avatar: 'avatar',
};

describe('updateProfileData', () => {
    test('success', async () => {
        const profile: DeepPartial<Profile> = {
            first: 'first',
            lastname: 'lastname',
            age: 22,
        };

        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('validation error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: { ...data, lastname: '', age: 0 },
                },
            },
        );
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileCodes.INCORRECT_USER_DATA, ValidateProfileCodes.INCORRECT_AGE]);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileCodes.SERVER_ERROR]);
    });
});
