import { createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    error: '',
    isLoading: false,
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(fetchArticleById.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
