import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/testI18n';

export const renderWithTranslation = (omponent: ReactNode) => (
    render(
        <I18nextProvider i18n={i18n}>
            {omponent}
        </I18nextProvider>,
    )
);
