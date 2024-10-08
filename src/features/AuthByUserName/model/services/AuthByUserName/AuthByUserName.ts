import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { User, userActions } from '@/entities/User';

interface authByUserNameProps {
    username: string;
    password: string;
}

export const authByUserName = createAsyncThunk<
    User,
    authByUserNameProps,
    ThunkApi<string>
>('login/authByUserName', async (formData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;

    try {
        const user = await extra.api.post<User>('login', formData);

        if (!user.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthUser(user.data));
        return user.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
