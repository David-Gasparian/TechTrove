import { StateSchema } from '@/app/provider/storeProvider';

export const selectAuthData = (state: StateSchema) => state.user.authData;
