import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKeys } from '@/app/provider/storeProvider';

export type AsyncReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducerLineEntity = [StateSchemaKeys, Reducer];

interface Options {
    removeAfterUnmount?: boolean;
}

export const useAsyncReducer = (reducers: AsyncReducersList, options?: Options) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const removeAfterUnmount = options?.removeAfterUnmount ?? true;

    useEffect(() => {
        const reducersMap = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach((item) => {
            const [name, reducer] = item as ReducerLineEntity;
            // skip if reducer is already exist
            if (!reducersMap[name]) {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INTI-${name}-REDUCER` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach((item) => {
                    const [name] = item as ReducerLineEntity;
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY-${name}-REDUCER` });
                });
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
