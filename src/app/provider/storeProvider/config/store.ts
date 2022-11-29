import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { StateSchema } from './stateSchema';

const reducer = {
    counter: counterReducer,
};

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
