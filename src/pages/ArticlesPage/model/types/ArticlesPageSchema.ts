import { EntityState } from '@reduxjs/toolkit';

import { ArticleView } from 'entities/Article';
import { Article } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;
    view: ArticleView;
    // pagination
    page: number;
    hasMore: boolean;
    limit?: number;
    _inited: boolean;
}
