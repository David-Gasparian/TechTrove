import {
    CombinedState,
    configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { userReducer } from 'entities/User';
import { saveScrollPositionReducer } from 'features/SaveScrollPosition';
import { $api } from 'shared/api/axiosInstance';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollPosition: saveScrollPositionReducer,
    };

    const reducerManager = createReducerManager(reducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
