import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageCommentsReducer } from './articleDetailsPageCommentsSlice';
import { articleDetailsPageRecommendationReducer } from './ArticleDetailsPageRecommendationSlice';

export const articleDetailsPageSlice = combineReducers<ArticleDetailsPageSchema>({
    recommendationArticles: articleDetailsPageRecommendationReducer,
    articleDetailsComments: articleDetailsPageCommentsReducer,
});
