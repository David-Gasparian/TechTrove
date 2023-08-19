import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleSortType, ArticleTypes } from 'entities/Article';
import { SortingOrder } from 'shared/types/filterTypes';

const initialState = {
    sortType: '',
    order: '',
    search: '',
    type: ArticleTypes.ALL,
};
const filterArticlesSliceSlice = createSlice({
    name: 'filterArticlesSlice',
    initialState,
    reducers: {
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
});
export const { actions: filterArticlesSliceActions } = filterArticlesSliceSlice;
export const { reducer: filterArticlesSliceReducer } = filterArticlesSliceSlice;
