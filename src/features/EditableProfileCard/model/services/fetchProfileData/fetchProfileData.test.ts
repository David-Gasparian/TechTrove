import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
    test('get profile succeed', async () => {
        const profile: DeepPartial<Profile> = {
            first: 'first',
            lastname: 'lastname',
            age: 22,
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('get profile failed', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
