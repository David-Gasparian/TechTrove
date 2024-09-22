import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/provider/storeProvider';
import i18n from '@/shared/config/i18n/testI18n';
import { ThemeProvider } from '@/app/provider/themeProvider';
import { Theme } from '@/shared/consts/theme';
import '@/app/styles/index.scss';

/**
 * Configuration options for rendering a component during tests.
 *
 * @interface ComponentRenderOptions
 * @property {string} [path='/'] - Initial route path for MemoryRouter.
 * @property {DeepPartial<StateSchema>} [initialValue] - Initial state for the Redux store during the test.
 * @property {DeepPartial<ReducersMapObject<StateSchema>>} [asyncReducer] - Any async reducers to be used in the Redux store for the test.
 * @property {Theme} [theme=Theme.LIGHT] - Initial theme (light or dark) to be applied during the test.
 */
interface ComponentRenderOptions {
    path?: string;
    initialValue?: DeepPartial<StateSchema>;
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

/**
 * A utility component to wrap a given component with providers for Redux store,
 * i18n, theme, and routing. This ensures that all necessary contexts are
 * available when rendering a component in testing environments.
 *
 * @param {TestProviderProps} props - The component's children and options for test configuration.
 * @returns {JSX.Element} - The component wrapped in necessary providers for testing.
 */
export const TestProvider = (props: TestProviderProps) => {
    const { children, options = {} } = props;
    const {
        path = '/',
        initialValue,
        theme = Theme.LIGHT,
        asyncReducer,
    } = options;

    return (
        <MemoryRouter initialEntries={[path]}>
            <StoreProvider asyncReducers={asyncReducer} initialValue={initialValue}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`App ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

/**
 * Renders a React component within a testing environment configured with routing,
 * Redux state management, i18n, and theming. This function is designed to simplify
 * test setups that require these contexts to be initialized.
 *
 * @param {ReactNode} component - The component to be rendered during the test.
 * @param {ComponentRenderOptions} [options={}] - Optional settings such as initial route path, Redux state, async reducers, and theme.
 * @returns {RenderResult} - The result of the render, which can be used to query or interact with the rendered component in the test.
 *
 * @example
 * componentRender(<MyComponent />, {
 *   path: '/my-path',
 *   initialValue: { user: { name: 'John' } },
 *   asyncReducer: { profile: profileReducer },
 *   theme: Theme.DARK,
 * });
 */
export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => render(
    <TestProvider options={options}>{component}</TestProvider>,
);
