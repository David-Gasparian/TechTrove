import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectCounter } from './counterSelector';

describe('selectCounter', () => {
    test('check the result', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 1,
            },
        };
        expect(selectCounter(state as StateSchema)).toEqual({ value: 1 });
    });
});
