import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { userStorage } from '@/shared/lib/storage/adapters/userAdapter';

interface authByUserNameProps {
    username: string;
    password: string;
}

export const authByUserName = createAsyncThunk<User, authByUserNameProps, ThunkApi<string>>(
    'login/authByUserName',
    async (formData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const user = await extra.api.post<User>('login', formData);

            if (!user.data) {
                throw new Error();
            }

            userStorage.setUser(USER_LOCAL_STORAGE_KEY, JSON.stringify(user.data));
            dispatch(userActions.setAuthUser(user.data));

            return user.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
