import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { ArticleSortType, ArticleTypes } from '@/entities/Article';
import { SortingOrder } from '@/shared/types/filterTypes';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkApi<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
        const inited = selectArticlesInited(getState());

        const sortFromUrl = searchParams.get('sort') as ArticleSortType;
        const orderFromUrl = searchParams.get('order') as SortingOrder;
        const typeFromUrl = searchParams.get('type') as ArticleTypes;
        const searchFromUrl = searchParams.get('search');

        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
        }

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticles({ page: 1 }));
        }
    } catch (e) {
        return rejectWithValue('error');
    }
});
