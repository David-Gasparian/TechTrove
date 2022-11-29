import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectCounterValue } from './selectCounterValue';

describe('selectCounterValue', () => {
    test('check the result', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 1,
            },
        };

        expect(selectCounterValue(state as StateSchema)).toBe(1);
    });
});
