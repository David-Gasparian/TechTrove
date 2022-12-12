import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    initialValue?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialValue,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialValue as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
