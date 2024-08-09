import { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/test/testAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId', () => {
    test('get comment succeed', async () => {
        const comment: DeepPartial<Comment> = {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        };

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });

    test('get comment failed', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
