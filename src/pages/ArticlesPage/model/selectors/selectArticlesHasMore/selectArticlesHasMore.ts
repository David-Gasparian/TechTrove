import { StateSchema } from 'app/provider/storeProvider';

export const selectArticlesHasMore = (state: StateSchema) => state?.articles?.hasMore || false;
