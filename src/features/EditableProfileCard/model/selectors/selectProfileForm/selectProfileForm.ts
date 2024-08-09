import { StateSchema } from '@/app/provider/storeProvider';

export const selectProfileForm = (state: StateSchema) => state?.profile?.form;
