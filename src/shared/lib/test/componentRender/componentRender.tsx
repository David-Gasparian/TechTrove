import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/provider/storeProvider';
import i18n from '@/shared/config/i18n/testI18n';

/**
 * Options for the `componentRender` function used in testing.
 *
 * @interface ComponentRenderOptions
 * @property {string} [path='/'] - Initial route for MemoryRouter.
 * @property {DeepPartial<StateSchema>} [initialValue] - Initial Redux state for the test.
 * @property {DeepPartial<ReducersMapObject<StateSchema>>} [asyncReducer] - Async reducers for the Redux store in the test.
 */
interface ComponentRenderOptions {
    path?: string;
    initialValue?: DeepPartial<StateSchema>;
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

/**
 * Renders a React component with routing, state management, and i18n for testing.
 *
 * @param {ReactNode} component - The component to render in tests.
 * @param {ComponentRenderOptions} [options={}] - Configuration options for the test render.
 * @returns {RenderResult} - The result of the render, useful for testing.
 *
 * @example
 * componentRender(<MyComponent />, { path: '/my-path', initialValue: { user: { name: 'John' } }, asyncReducer: { profile: profileReducer } });
 */
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
