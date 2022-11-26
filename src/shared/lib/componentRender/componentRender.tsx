import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/testI18n';

interface ComponentRenderOptions {
    path?: string;
}

export const componentRender = (omponent: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        path = '/',
    } = options;

    return (
        render(
            <MemoryRouter initialEntries={[path]}>
                <I18nextProvider i18n={i18n}>
                    {omponent}
                </I18nextProvider>
            </MemoryRouter>,
        )
    );
};
