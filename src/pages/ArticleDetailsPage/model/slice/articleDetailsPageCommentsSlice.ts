import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/provider/storeProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchArticleDetailsComments/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const commentsSelectors = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.articleDetailsComments ||
        commentsAdapter.getInitialState(),
);

const articleDetailsPageCommentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, { payload }) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, payload);
                },
            )
            .addCase(
                fetchCommentsByArticleId.rejected,
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                },
            );
    },
});

export const { actions: articleDetailsPageCommentsActions } =
    articleDetailsPageCommentsSlice;
export const { reducer: articleDetailsPageCommentsReducer } =
    articleDetailsPageCommentsSlice;
