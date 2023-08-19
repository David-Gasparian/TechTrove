import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticles/fetchArticles');

describe('initArticlesPage', () => {
    const searchParams = new URLSearchParams(window.location.search);

    test('init articles', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articles: {
                _inited: false,
            },
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });
    });

    test('fetchArticles not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articles: {
                _inited: true,
            },
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });

    test('with query params', async () => {
        searchParams.set('order', 'asc');
        searchParams.set('sort', 'title');
        searchParams.set('search', 'text');

        const thunk = new TestAsyncThunk(initArticlesPage, {
            articles: {
                _inited: true,
            },
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(5);
    });
});
