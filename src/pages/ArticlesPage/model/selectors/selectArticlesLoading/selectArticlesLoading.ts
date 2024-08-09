import { StateSchema } from '@/app/provider/storeProvider';

export const selectArticlesLoading = (state: StateSchema) => state?.articles?.isLoading;
