import { StateSchema } from 'app/provider/storeProvider';

export const selectCounter = (state: StateSchema) => state.counter;
