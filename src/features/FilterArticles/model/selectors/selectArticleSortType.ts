import { StateSchema } from '@/app/provider/storeProvider';
import { ArticleSortType } from '@/entities/Article';

export const selectArticleSortType = (state: StateSchema) => state?.filterArticlesForm?.sortType
|| ArticleSortType.TITLE;
