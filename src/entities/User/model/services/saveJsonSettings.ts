import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApi } from '@/app/provider/storeProvider';
import { JsonSettings } from '../types/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';
import { selectJsonSettings } from '../selectors/selectJsonSettings/selectJsonSettings';
import { selectAuthData } from '../selectors/selectAuthData/selectAuthData';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkApi<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = selectAuthData(getState());
    const currentSettings = selectJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
