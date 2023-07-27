import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { Article } from 'entities/Article/model/types/article';
import { selectArticlesLimit } from '../../selectors/selectArticlesLimit/selectArticlesLimit';

interface fetchArticlesProps {
    page: number
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkApi<string>>(
    'articlesPage/fetchArticles',
    async (data, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const { page = 1 } = data;
            const limit = selectArticlesLimit(getState());

            const result = await extra.api.get<Article[]>('articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                },
            });
            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
