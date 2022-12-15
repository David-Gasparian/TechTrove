import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { userStorage } from 'shared/lib/storage/adapters/userAdapter';

interface authByUserNameProps {
    username: string;
    password: string;
}

export const authByUserName = createAsyncThunk<User, authByUserNameProps, {rejectValue: string}>(
    'login/AuthByUserName',
    async (formData, thunkAPI) => {
        try {
            const user = await axios.post<User>('http://localhost:8000/login', formData);

            if (!user.data) {
                throw new Error();
            }

            userStorage.setUser(USER_LOCAL_STORAGE_KEY, JSON.stringify(user.data));
            thunkAPI.dispatch(userActions.setAuthUser(user.data));

            return user.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
