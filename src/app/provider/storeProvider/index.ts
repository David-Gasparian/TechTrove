import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKeys,
    ThunkApi,
} from './config/stateSchema';

export { StoreProvider, createReduxStore };

export type {
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKeys,
    AppDispatch,
    ThunkApi,
};
