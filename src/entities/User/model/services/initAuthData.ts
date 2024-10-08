import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApi } from '@/app/provider/storeProvider';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/userSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkApi<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
