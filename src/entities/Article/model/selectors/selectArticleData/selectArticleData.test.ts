import { StateSchema } from '@/app/provider/storeProvider';
import { Article } from '../../types/article';
import { selectArticleData } from './selectArticleData';

describe('selectArticleData', () => {
    test('should return article data', () => {
        const articleData: DeepPartial<Article> = {
            id: '1',
            title: 'title',
            subtitle: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            article: {
                data: articleData,
            },
        };
        expect(selectArticleData(state as StateSchema)).toEqual(articleData);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            article: { data: undefined },
        };
        expect(selectArticleData(state as StateSchema)).toBe(undefined);
    });
});
