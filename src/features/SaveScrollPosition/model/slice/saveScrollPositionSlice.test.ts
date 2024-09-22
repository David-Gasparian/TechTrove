import { ScrollPositionSchema } from '../types/scrollPositionSchema';
import {
    saveScrollPositionActions,
    saveScrollPositionReducer,
} from './saveScrollPositionSlice';

describe('saveScrollPositionSlice', () => {
    test('set readOnly', () => {
        const path = 'artiles';
        const position = 200;

        const returnResult: DeepPartial<ScrollPositionSchema> = {
            scroll: {
                [path]: position,
            },
        };

        const state: DeepPartial<ScrollPositionSchema> = {
            scroll: {},
        };

        expect(
            saveScrollPositionReducer(
                state as ScrollPositionSchema,
                saveScrollPositionActions.setScroll({ path, position }),
            ),
        ).toEqual(returnResult);
    });

    test('check empty state', () => {
        const returnResult: DeepPartial<ScrollPositionSchema> = {
            scroll: {},
        };
        expect(saveScrollPositionReducer(undefined, { type: '' })).toEqual(
            returnResult,
        );
    });
});
