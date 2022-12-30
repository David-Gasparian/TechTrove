import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { Profile } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkApi<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        try {
            const profileData = selectProfileForm(getState());

            const result = await extra.api.put<Profile>('profile', profileData);

            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
