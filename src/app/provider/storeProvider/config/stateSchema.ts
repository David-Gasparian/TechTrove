import {
    AnyAction,
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: UserSchema,

    // async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
        getReducerMap: () => ReducersMapObject<StateSchema> | any;
        reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
        add: (key: StateSchemaKeys, reducer: Reducer) => void;
        remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}
