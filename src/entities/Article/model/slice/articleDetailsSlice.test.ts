import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice', () => {
    test('fetch article extraReducer panding', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: undefined,
            isLoading: false,
        };

        const result: DeepPartial<ArticleDetailsSchema> = {
            error: undefined,
            isLoading: true,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual(result);
    });

    test('fetch article extraReducer fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: undefined,
        };

        const data = {
            id: '1',
            title: 'title',
            subtitle: 'subtitle',
            img: 'img',
        };

        const result: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data as Article, '', { id: '1' }),
            ),
        ).toEqual(result);
    });
});
