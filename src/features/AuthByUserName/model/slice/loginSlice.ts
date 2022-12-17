import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authByUserName } from '../services/authByUserName/authByUserName';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    password: '',
    username: '',
    error: '',
};

const userSlice = createSlice({
    name: 'LoginForm',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },

        setUserPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUserName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUserName.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
