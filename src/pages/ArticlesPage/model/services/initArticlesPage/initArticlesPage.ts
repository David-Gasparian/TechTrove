import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { filterArticlesSliceActions } from '@/features/FilterArticles';
import { ArticleSortType, ArticleTypes } from '@/entities/Article';
import { SortingOrder } from '@/shared/types/filterTypes';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkApi<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        try {
            const inited = selectArticlesInited(getState());

            const sortFromUrl = searchParams.get('sort') as ArticleSortType;
            const orderFromUrl = searchParams.get('order') as SortingOrder;
            const typeFromUrl = searchParams.get('type') as ArticleTypes;
            const searchFromUrl = searchParams.get('search');

            if (sortFromUrl) {
                dispatch(filterArticlesSliceActions.setSort(sortFromUrl));
            }
            if (orderFromUrl) {
                dispatch(filterArticlesSliceActions.setOrder(orderFromUrl));
            }
            if (searchFromUrl) {
                dispatch(filterArticlesSliceActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(filterArticlesSliceActions.setType(typeFromUrl));
            }

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticles({ page: 1 }));
            }
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
