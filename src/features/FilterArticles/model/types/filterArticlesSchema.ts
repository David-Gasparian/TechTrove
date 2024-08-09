import { ArticleSortType, ArticleTypes } from '@/entities/Article';
import { SortingOrder } from '@/shared/types/filterTypes';

export interface FilterArticlesSchema {
    sortType: ArticleSortType;
    order: SortingOrder;
    search: string;
    type: ArticleTypes
}
