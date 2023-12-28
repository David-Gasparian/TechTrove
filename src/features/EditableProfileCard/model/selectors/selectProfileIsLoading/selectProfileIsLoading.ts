import { StateSchema } from 'app/provider/storeProvider';

export const selectProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading || false;
