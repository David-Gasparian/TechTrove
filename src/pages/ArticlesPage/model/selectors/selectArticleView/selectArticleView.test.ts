import { StateSchema } from '@/app/provider/storeProvider';
import { ArticleView } from '@/entities/Article';
import { selectArticleView } from './selectArticleView';

describe('selectArticleView', () => {
    test('should return BIG', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                view: ArticleView.BIG,
            },
        };
        expect(selectArticleView(state as StateSchema)).toEqual(
            ArticleView.BIG,
        );
    });

    test('should return SMALL', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                view: ArticleView.SMALL,
            },
        };
        expect(selectArticleView(state as StateSchema)).toBe(ArticleView.SMALL);
    });

    test('if view is undefined should return SMALL', () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                view: undefined,
            },
        };
        expect(selectArticleView(state as StateSchema)).toBe(ArticleView.SMALL);
    });
});
