import { EntityState } from '@reduxjs/toolkit';

import {
    Article,
    ArticleSortType,
    ArticleTypes,
    ArticleView,
} from '@/entities/Article';
import { SortingOrder } from '@/shared/types/filterTypes';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;
    view: ArticleView;
    // pagination
    page: number;
    hasMore: boolean;
    limit: number;
    _inited: boolean;
    sortType: ArticleSortType;
    order: SortingOrder;
    search: string;
    type: ArticleTypes;
}
