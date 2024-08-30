import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchema, StateSchemaKeys } from '@/app/provider/storeProvider';

export type AsyncReducersList = {
    [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>;
}

type ReducerLineEntity = [StateSchemaKeys, Reducer];

interface Options {
    removeAfterUnmount?: boolean;
}

/**
 * Hook to dynamically add and optionally remove Redux reducers at runtime.
 *
 * @param {AsyncReducersList} reducers - An object mapping state keys to their corresponding reducers.
 * @param {Options} [options] - Configuration options.
 * @param {boolean} [options.removeAfterUnmount=true] - If true, removes the reducers when the component unmounts.
 *
 * @example
 * useAsyncReducer(
 *     { user: userReducer, posts: postsReducer },
 *     { removeAfterUnmount: true }
 * );
 */
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
