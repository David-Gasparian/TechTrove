import { StateSchema } from '@/app/provider/storeProvider';

export const selectReadOnly = (state: StateSchema) =>
    state?.profile?.readOnly || false;
