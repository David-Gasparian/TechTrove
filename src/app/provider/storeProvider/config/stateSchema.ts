import {
    AnyAction,
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    user: UserSchema,

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentSchema
    articles?: ArticlesPageSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
        getReducerMap: () => ReducersMapObject<StateSchema> | any;
        reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
        add: (key: StateSchemaKeys, reducer: Reducer) => void;
        remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

interface ThunkExtraParams {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkApi<RV> {
    rejectValue: RV;
    extra: ThunkExtraParams;
    state: StateSchema;
}
