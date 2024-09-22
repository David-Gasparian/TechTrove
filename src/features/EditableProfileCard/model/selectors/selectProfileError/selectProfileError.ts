import { StateSchema } from '@/app/provider/storeProvider';

export const selectProfileError = (state: StateSchema) =>
    state?.profile?.error || '';
