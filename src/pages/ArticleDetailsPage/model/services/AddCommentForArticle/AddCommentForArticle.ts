import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { selectArticleData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { selectAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '../fetchArticleDetailsComments/fetchCommentsByArticleId';

interface AddCommentForArticleProps {
    text: string;
}

export const AddCommentForArticle = createAsyncThunk<
    Comment[],
    AddCommentForArticleProps,
    ThunkApi<string>
>('article/AddCommentForArticle', async (data, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
    const { text } = data;

    const article = selectArticleData(getState());
    const user = selectAuthData(getState());

    if (!article || !user || !text) {
        return rejectWithValue('error');
    }

    try {
        const result = await extra.api.post<Comment[]>('comments', {
            text,
            articleId: article.id,
            userId: user.id,
        });

        if (!result.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId({ id: article.id }));

        return result.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
