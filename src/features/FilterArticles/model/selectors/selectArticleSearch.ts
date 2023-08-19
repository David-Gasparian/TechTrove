import { StateSchema } from 'app/provider/storeProvider';

export const selectArticleSearch = (state: StateSchema) => state?.filterArticlesForm?.search || '';
