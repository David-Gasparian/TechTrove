import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from 'app/provider/storeProvider';
import { Comment } from 'entities/Comment';

interface fetchArticleByIdProps {
    id?: string;
}

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], fetchArticleByIdProps, ThunkApi<string>>(
    'article/fetchCommentsByArticleId',
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        if (!data.id) {
            return rejectWithValue('error');
        }

        try {
            const result = await extra.api.get<Comment[]>('comments', {
                params: {
                    articleId: data.id,
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
