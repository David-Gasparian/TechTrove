import { StateSchema } from '@/app/provider/storeProvider';

export const selectIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
