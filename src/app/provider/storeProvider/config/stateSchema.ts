import {
    AnyAction,
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import { ArticleDetailsSchema } from '@/entities/Article';
import {
    ArticleDetailsPageSchema,
} from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollPositionSchema } from '@/features/SaveScrollPosition';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
    user: UserSchema,
    scrollPosition: ScrollPositionSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleDetailsSchema;
    articles?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
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
}

export interface ThunkApi<RV> {
    rejectValue: RV;
    extra: ThunkExtraParams;
    state: StateSchema;
}
