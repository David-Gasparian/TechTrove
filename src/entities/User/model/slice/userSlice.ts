import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { userStorage } from '@/shared/lib/storage/adapters/userAdapter';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/userSchema';

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
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
