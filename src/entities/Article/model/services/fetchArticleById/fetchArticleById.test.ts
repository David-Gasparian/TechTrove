import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { Article } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
    test('get article succeed', async () => {
        const article: DeepPartial<Article> = {
            id: '1',
            title: 'title',
            subtitle: 'subtitle',
        };

        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('get article failed', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk({ id: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
