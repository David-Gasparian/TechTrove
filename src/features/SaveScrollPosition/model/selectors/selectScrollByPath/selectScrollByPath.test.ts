import { StateSchema } from 'app/provider/storeProvider';
import { selectScrollByPath } from './selectScrollByPath';

describe('selectScrollByPath', () => {
    test('should return scroll position', () => {
        const path = 'articles';
        const position = 200;

        const state: DeepPartial<StateSchema> = {
            scrollPosition: {
                scroll: {
                    [path]: position,
                },
            },
        };
        expect(selectScrollByPath(state as StateSchema, path)).toEqual(position);
    });

    test('should return 0 if scroll is empty', () => {
        const path = 'articles';

        const state: DeepPartial<StateSchema> = {
            scrollPosition: {
                scroll: {},
            },
        };
        expect(selectScrollByPath(state as StateSchema, path)).toBe(0);
    });
});
