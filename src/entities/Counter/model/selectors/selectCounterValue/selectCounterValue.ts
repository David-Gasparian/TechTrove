import { createSelector } from '@reduxjs/toolkit';

import { selectCounter } from '../selectCounter.ts/counterSelector';
import { CounterSchema } from '../../types/counterSchema';

export const selectCounterValue = createSelector(
    selectCounter,
    (counter: CounterSchema) => counter.value,
);
