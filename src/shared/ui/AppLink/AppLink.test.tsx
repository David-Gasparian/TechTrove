import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/componentRender/componentRender';
import { AppLink, APPLinkTheme } from './AppLink';

describe('AppLink', () => {
    test('check Link', () => {
        componentRender(<AppLink to="/">Test</AppLink>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'className';
        componentRender(<AppLink className={className} to="/">Test</AppLink>);
        expect(screen.getByText('Test')).toHaveClass(className);
    });

    test('check prop theme', () => {
        componentRender(<AppLink theme={APPLinkTheme.RED} to="/">Test</AppLink>);
        expect(screen.getByText('Test')).toHaveClass(APPLinkTheme.RED);
    });

    test('check prop to', () => {
        componentRender(<AppLink to="/">Test</AppLink>);
        expect(screen.getByTestId('link')).toHaveAttribute('href');
    });

    test('check unmount', () => {
        const wrapper = componentRender(<AppLink to="/">Test</AppLink>);

        expect(screen.getByText('Test')).toBeInTheDocument();

        wrapper.unmount();

        expect(screen.queryByText('Test')).toBeNull();
    });
});
