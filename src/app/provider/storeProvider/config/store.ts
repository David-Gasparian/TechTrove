import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { StateSchema } from './stateSchema';

const reducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
};

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
