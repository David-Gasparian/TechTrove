import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/provider/storeProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
// eslint-disable-next-line feature-slice-import-manager/layer-imports
import { profileReducer } from '@/features/EditableProfileCard';
import { AsyncReducersList } from '../../lib/hooks/useAsyncReducer';

const defaultAsyncReducers: AsyncReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleDetailsReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialValue={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
