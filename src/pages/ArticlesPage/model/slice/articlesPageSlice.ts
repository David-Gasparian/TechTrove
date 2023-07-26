import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { articleViewStorage } from 'shared/lib/storage/adapters/articleViewAdapter';
import { fetchArticles } from '../services/fetchArticles';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const articlesSelectors = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articleAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: '',
        view: ArticleView.SMALL,
        entities: {},
        ids: [],
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            articleViewStorage.setView(VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initState: (state) => {
            const view = articleViewStorage.getView(VIEW_LOCAL_STORAGE_KEY) as ArticleView;
            state.view = view;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, payload) => {
                state.isLoading = false;
                articleAdapter.setAll(state, payload);
            })
            .addCase(fetchArticles.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});
export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
