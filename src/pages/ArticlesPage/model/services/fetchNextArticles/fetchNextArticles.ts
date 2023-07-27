import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { selectArticlesLoading } from '../../selectors/selectArticlesLoading/selectArticlesLoading';
import { selectArticlesHasMore } from '../../selectors/selectArticlesHasMore/selectArticlesHasMore';
import { selectArticlesPage } from '../../selectors/selectArticlesPage/selectArticlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkApi<string>>(
    'articlesPage/fetchNextArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        try {
            const hasMore = selectArticlesHasMore(getState());
            const loading = selectArticlesLoading(getState());
            const page = selectArticlesPage(getState());

            if (hasMore && !loading) {
                const nextPage = page + 1;

                dispatch(articlesPageActions.setPage(nextPage));
                dispatch(fetchArticles({ page: nextPage }));
            }
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
