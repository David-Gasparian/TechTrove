import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { authByUserName } from './AuthByUserName';

describe('authByUserName', () => {
    test('login success', async () => {
        const userValue = { username: 'name', id: '1' };

        const thunk = new TestAsyncThunk(authByUserName);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: 'name', password: 'password' });

        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userValue));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('login error', async () => {
        const thunk = new TestAsyncThunk(authByUserName);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'name', password: 'password' });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
