import { StateSchema } from '@/app/provider/storeProvider';

export const selectLoginError = (state: StateSchema) =>
    state?.loginForm?.error || '';
