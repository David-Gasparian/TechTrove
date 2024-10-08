import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { userStorage } from '@/shared/lib/storage/adapters/userAdapter';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/userSchema';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            userStorage.setUser(USER_LOCAL_STORAGE_KEY, action.payload.id);
        },
        initAuthUser: (state) => {
            const json = userStorage.getUser(USER_LOCAL_STORAGE_KEY);
            if (json) {
                const user = JSON.parse(json) as User;
                state.authData = user;
                setFeatureFlags(user.features);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            userStorage.removeUser(USER_LOCAL_STORAGE_KEY);
            setFeatureFlags({});
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
