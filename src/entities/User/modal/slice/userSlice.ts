import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    authData: null,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
