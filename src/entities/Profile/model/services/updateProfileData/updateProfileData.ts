import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { Profile, ValidateProfileCodes } from '../../types/profileSchema';
import { validateProfileData } from '../validation/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkApi<ValidateProfileCodes[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        try {
            const profileData = selectProfileForm(getState());
            const errors = validateProfileData(profileData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            const result = await extra.api.put<Profile>(`profile/${profileData?.id}`, profileData);

            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileCodes.SERVER_ERROR]);
        }
    },
);
