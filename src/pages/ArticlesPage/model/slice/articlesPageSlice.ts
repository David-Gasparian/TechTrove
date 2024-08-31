import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/provider/storeProvider';
import {
    Article, ArticleSortType, ArticleTypes, ArticleView,
} from '@/entities/Article';
import { VIEW_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { articleViewStorage } from '@/shared/lib/storage/adapters/articleViewAdapter';
import { SortingOrder } from '@/shared/types/filterTypes';
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
        limit: 0,
        sortType: ArticleSortType.TITLE,
        order: SortingOrder.ASC,
        search: '',
        type: ArticleTypes.ALL,
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
        setSort: (state, { payload }: PayloadAction<ArticleSortType>) => {
            state.sortType = payload;
        },
        setOrder: (state, { payload }: PayloadAction<SortingOrder>) => {
            state.order = payload;
        },
        setSearch: (state, { payload }: PayloadAction<string>) => {
            state.search = payload;
        },
        setType: (state, { payload }: PayloadAction<ArticleTypes>) => {
            state.type = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length >= state.limit;
            })
            .addCase(fetchArticles.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});
export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
