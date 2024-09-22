import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { Article } from '../../types/article';

interface fetchArticleByIdProps {
    id: string;
}

export const fetchArticleById = createAsyncThunk<
    Article,
    fetchArticleByIdProps,
    ThunkApi<string>
>('article/fetchArticleById', async (data, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const result = await extra.api.get<Article>(`articles/${data.id}`);

        if (!result.data) {
            throw new Error();
        }

        return result.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
