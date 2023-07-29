import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited';

export const initArticlesPage = createAsyncThunk<void, void, ThunkApi<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        try {
            const inited = selectArticlesInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticles({ page: 1 }));
            }
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
