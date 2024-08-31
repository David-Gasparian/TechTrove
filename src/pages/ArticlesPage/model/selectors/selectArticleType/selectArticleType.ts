import { StateSchema } from '@/app/provider/storeProvider';
import { ArticleTypes } from '@/entities/Article';

export const selectArticleType = (state: StateSchema) => state?.articles?.type
|| ArticleTypes.ALL;
