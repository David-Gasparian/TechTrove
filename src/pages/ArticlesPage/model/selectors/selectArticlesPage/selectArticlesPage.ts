import { StateSchema } from 'app/provider/storeProvider';

export const selectArticlesPage = (state: StateSchema) => state?.articles?.page || 1;
