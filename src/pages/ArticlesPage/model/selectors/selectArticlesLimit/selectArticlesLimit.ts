import { StateSchema } from '@/app/provider/storeProvider';

export const selectArticlesLimit = (state: StateSchema) => state?.articles?.limit || 3;
