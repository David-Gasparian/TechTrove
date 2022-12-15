import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { userStorage } from 'shared/lib/storage/adapters/userAdapter';

import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    authData: null,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthUser: (state) => {
            const user = userStorage.getUser(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = null;
            userStorage.removeUser(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
