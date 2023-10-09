import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { Article } from 'entities/Article';
import { fetchRecommendationArticles } from '../services/fetchRecommendationArticles/fetchRecommendationArticles';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecommendationScema';

const recommendationArticlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const recommendationArticlesSelectors = recommendationArticlesAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendationArticles || recommendationArticlesAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlice = createSlice({
    name: 'recommendation',
    initialState: recommendationArticlesAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendationArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRecommendationArticles.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                recommendationArticlesAdapter.setAll(state, payload);
            })
            .addCase(fetchRecommendationArticles.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendationActions } = articleDetailsPageRecommendationSlice;
export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendationSlice;
