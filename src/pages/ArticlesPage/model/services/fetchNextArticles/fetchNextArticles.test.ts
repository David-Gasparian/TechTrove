import { TestAsyncThunk } from '@/shared/lib/test/testAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { fetchNextArticles } from './fetchNextArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticles', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                isLoading: false,
                hasMore: true,
                limit: 10,
                ids: [],
                entities: {},
                page: 1,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({ page: 2 });
    });

    test('fetchArticles not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                isLoading: false,
                hasMore: false,
                limit: 10,
                page: 1,
                ids: [],
                entities: {},
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });

    test('if loading is true fetchArticles should not be called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                isLoading: true,
                hasMore: true,
                limit: 10,
                page: 1,
                ids: [],
                entities: {},
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });
});
