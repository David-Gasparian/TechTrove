import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/provider/storeProvider';

export type AsyncReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducerLineEntity = [StateSchemaKeys, Reducer];

export const useAsyncReducer = (reducers: AsyncReducersList) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerLineEntity) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INTI-${name}-REDUCER` });
        });

        return () => {
            Object.entries(reducers).forEach(([name]: ReducerLineEntity) => {
                store.reducerManager.remove(name);
                dispatch({ type: `@DESTROY-${name}-REDUCER` });
            });
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
