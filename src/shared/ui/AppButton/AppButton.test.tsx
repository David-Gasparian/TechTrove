import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonSize, AppButtonTheme } from '../AppButton';

describe('AppButton', () => {
    test('Button', () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'className';
        render(<AppButton className={className}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass(className);
    });

    test('class square must be', () => {
        render(<AppButton square>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass('square');
    });

    test('class square must not be', () => {
        render(<AppButton square={false}>Test</AppButton>);
        expect(screen.getByText('Test')).not.toHaveClass('square');
    });

    test('check prop theme', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass(AppButtonTheme.CLEAR);
    });

    test('check prop size', () => {
        render(<AppButton size={AppButtonSize.XL}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass(AppButtonSize.XL);
    });

    test('check prop disabled', () => {
        render(<AppButton disabled>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveAttribute('disabled');
        expect(screen.getByText('Test')).toHaveClass('disabled');
    });

    test('check unmount', () => {
        const wrapper = render(<AppButton>Test</AppButton>);
        const button = screen.getByText('Test');
        expect(button).toBeInTheDocument();

        wrapper.unmount();

        expect(button).not.toBeInTheDocument();
    });
});
