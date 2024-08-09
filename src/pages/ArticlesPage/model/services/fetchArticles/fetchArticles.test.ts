import { Article } from '@/entities/Article/model/types/article';
import { TestAsyncThunk } from '@/shared/lib/test/testAsyncThunk';
import { fetchArticles } from './fetchArticles';

describe('fetchArticles', () => {
    test('get articles succeed', async () => {
        const articles: DeepPartial<Article>[] = [
            {
                id: '1',
                title: 'title',
                subtitle: 'subtitle',
            },
            {
                id: '2',
                title: 'title',
                subtitle: 'subtitle',
            },
        ];

        const thunk = new TestAsyncThunk(fetchArticles);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));
        const result = await thunk.callThunk({ page: 1 });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articles);
    });

    test('get articles failed', async () => {
        const thunk = new TestAsyncThunk(fetchArticles);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callThunk({ page: 1 });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
