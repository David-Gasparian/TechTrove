import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

// TODO

import { StateSchema, StoreProvider } from '@/app/provider/storeProvider';
// eslint-disable-next-line feature-slice-import-manager/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line feature-slice-import-manager/public-api-imports
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard';
import { AsyncReducersList } from '../../lib/hooks/useAsyncReducer';

const defaultAsyncReducers: AsyncReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialValue={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
