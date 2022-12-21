import axios from 'axios';

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { authByUserName } from './authByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('authByUserName', () => {
    test('login success', async () => {
        const userValue = { username: 'name', id: '1' };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(authByUserName);
        const result = await thunk.callThunk({ username: 'name', password: 'password' });

        // expect(thunk.dispatch).toBeCalledTimes(3);
        // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userValue));
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('fulfilled');
        // expect(result.payload).toEqual(userValue);
    });

    test('login error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(authByUserName);
        const result = await thunk.callThunk({ username: 'name', password: 'password' });

        // expect(thunk.dispatch).toBeCalledTimes(2);
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('rejected');
        // expect(result.payload).toEqual('error');
    });
});
