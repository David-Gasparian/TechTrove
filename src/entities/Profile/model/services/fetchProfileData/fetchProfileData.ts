import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApi<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const result = await extra.api.get<Profile>('profile');

            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
