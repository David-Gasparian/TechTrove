import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
    test('Button', () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with class clear', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
