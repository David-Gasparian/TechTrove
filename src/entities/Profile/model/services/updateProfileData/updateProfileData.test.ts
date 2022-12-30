import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { Profile } from '../../types/profileSchema';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
    test('update profile succeed', async () => {
        const profile: DeepPartial<Profile> = {
            first: 'first',
            lastname: 'lastname',
            age: 22,
        };

        const thunk = new TestAsyncThunk(updateProfileData);
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('update profile failed', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
