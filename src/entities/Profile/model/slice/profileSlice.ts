import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    error: '',
    readOnly: true,
    isLoading: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setreadOnly: (state, { payload }: PayloadAction<boolean>) => {
            state.readOnly = payload;
        },
        clearForm: (state) => {
            state.form = state.data;
        },
        updatePfofile: (state, { payload }: PayloadAction<DeepPartial<Profile>>) => {
            state.form = {
                ...state.form,
                ...payload,
            } as Profile;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
                state.form = payload;
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
                state.form = payload;
                state.readOnly = true;
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
