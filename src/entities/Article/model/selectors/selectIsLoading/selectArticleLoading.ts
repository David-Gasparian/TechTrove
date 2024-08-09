import { StateSchema } from '@/app/provider/storeProvider';

export const selectArticleLoading = (state: StateSchema) => state?.article?.isLoading;
