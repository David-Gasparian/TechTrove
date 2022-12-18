import {
    configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

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
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
