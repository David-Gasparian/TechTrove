import { StateSchema } from '@/app/provider/storeProvider';

export const selectProfileData = (state: StateSchema) => state?.profile?.data;
