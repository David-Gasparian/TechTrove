import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { articleViewStorage } from 'shared/lib/storage/adapters/articleViewAdapter';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
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
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            articleViewStorage.setView(VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initState: (state) => {
            const view = articleViewStorage.getView(VIEW_LOCAL_STORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                articleAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticles.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});
export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
