import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { Profile } from '@/entities/Profile';

interface fetchProfileDataProps {
    id?: string;
}

export const fetchProfileData = createAsyncThunk<
    Profile,
    fetchProfileDataProps,
    ThunkApi<string>
>('profile/fetchProfileData', async (data, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (!data.id) {
        return rejectWithValue('error');
    }

    try {
        const result = await extra.api.get<Profile>(`profile/${data.id}`);

        if (!result.data) {
            throw new Error();
        }

        return result.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
