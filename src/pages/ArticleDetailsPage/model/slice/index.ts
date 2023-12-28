import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageCommentsReducer } from './articleDetailsPageCommentsSlice';

export const articleDetailsPageSlice = combineReducers<ArticleDetailsPageSchema>({
    articleDetailsComments: articleDetailsPageCommentsReducer,
});
