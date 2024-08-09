import { StateSchema } from '@/app/provider/storeProvider';
import { selectCommentsLoading } from './selectCommentsLoading';

describe('selectCommentsLoading', () => {
    test('should return loading info', () => {
        const isLoading = true;

        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                articleDetailsComments: {
                    isLoading,
                },
            },
        };
        expect(selectCommentsLoading(state as StateSchema)).toEqual(isLoading);
    });
});
