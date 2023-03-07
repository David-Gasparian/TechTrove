import { Article } from './article';

export interface ArticleDetailsSchema {
    data?: Article;
    isLoading: boolean;
    error?: string;
}
