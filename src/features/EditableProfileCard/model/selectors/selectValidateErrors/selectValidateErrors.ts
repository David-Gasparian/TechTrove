import { StateSchema } from '@/app/provider/storeProvider';

export const selectValidateErrors = (state: StateSchema) => state?.profile?.validateErrors;
