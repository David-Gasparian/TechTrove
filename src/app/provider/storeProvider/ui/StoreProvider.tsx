import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    initialValue?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialValue,
    } = props;

    const store = createReduxStore(initialValue as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
