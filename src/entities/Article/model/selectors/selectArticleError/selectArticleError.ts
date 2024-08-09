import { StateSchema } from '@/app/provider/storeProvider';

export const selectArticleError = (state: StateSchema) => state?.article?.error || '';
