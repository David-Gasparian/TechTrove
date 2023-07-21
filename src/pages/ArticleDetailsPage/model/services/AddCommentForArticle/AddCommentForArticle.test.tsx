import { Comment } from 'entities/Comment';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { AddCommentForArticle } from './AddCommentForArticle';

const state = {
    article: {
        data: {
            id: '1',
        },
    },
    user: {
        authData: {
            id: '1',
        },
    },
};

describe('AddCommentForArticle', () => {
    test('success', async () => {
        const commnet: DeepPartial<Comment> = {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        };

        const thunk = new TestAsyncThunk(
            AddCommentForArticle,
            state,
        );

        thunk.api.post.mockReturnValue(Promise.resolve({ data: commnet }));
        const result = await thunk.callThunk({ text: 'test' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(commnet);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(
            AddCommentForArticle,
            state,
        );
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk({ text: 'test' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
