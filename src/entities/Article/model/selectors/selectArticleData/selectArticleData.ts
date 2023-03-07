import { StateSchema } from 'app/provider/storeProvider';

export const selectArticleData = (state: StateSchema) => state?.article?.data;
