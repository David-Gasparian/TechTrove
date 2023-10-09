import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { Article } from 'entities/Article';

export const fetchRecommendationArticles = createAsyncThunk<Article[], undefined, ThunkApi<string>>(
    'articleDetailsPage/fetchRecommendationArticles',
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const result = await extra.api.get<Article[]>('articles', {
                params: {
                    _limit: 4,
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
