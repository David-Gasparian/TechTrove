import { StateSchema } from '@/app/provider/storeProvider';
import { selectArticleLoading } from './selectArticleLoading';

describe('selectArticleLoading', () => {
    test('should return loading info', () => {
        const isLoading = true;

        const state: DeepPartial<StateSchema> = {
            article: {
                isLoading,
            },
        };
        expect(selectArticleLoading(state as StateSchema)).toEqual(isLoading);
    });
});
