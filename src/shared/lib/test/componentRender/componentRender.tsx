import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/provider/storeProvider';
import i18n from '@/shared/config/i18n/testI18n';

interface ComponentRenderOptions {
    path?: string;
    initialValue?: DeepPartial<StateSchema>;
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        path = '/',
        initialValue,
        asyncReducer,
    } = options;

    return (
        render(
            <MemoryRouter initialEntries={[path]}>
                <StoreProvider asyncReducers={asyncReducer} initialValue={initialValue}>
                    <I18nextProvider i18n={i18n}>
                        {component}
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>,
        )
    );
};
