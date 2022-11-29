import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('value should increase', () => {
        const state: CounterSchema = {
            value: 1,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 2 });
    });

    test('value should decrease', () => {
        const state: CounterSchema = {
            value: 1,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 0 });
    });

    test('if state is undefined', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
