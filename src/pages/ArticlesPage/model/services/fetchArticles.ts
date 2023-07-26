import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { Article } from 'entities/Article/model/types/article';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkApi<string>>(
    'articlesPage/fetchArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const result = await extra.api.get<Article[]>('articles', {
                params: {
                    _expand: 'user',
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
