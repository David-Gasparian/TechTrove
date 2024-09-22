import { StateSchema } from '@/app/provider/storeProvider';

export const selectUserName = (state: StateSchema) =>
    state?.loginForm?.username || '';
