import {
    configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { ReduxStoreWithManager, StateSchema } from './stateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(reducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
};
