import {
    fireEvent, render, screen,
} from '@testing-library/react';
import { AppInput } from './AppInput';

describe('AppInput', () => {
    test('this elements should be in the document', () => {
        render(<AppInput />);

        expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'className';
        render(<AppInput className={className} />);

        expect(screen.getByTestId('inputWrapper')).toHaveClass(className);
    });

    test('check prop type', () => {
        render(<AppInput type='text' />);

        expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
    });

    test('check prop value', () => {
        render(<AppInput value='text' />);

        expect(screen.getByTestId('input')).toHaveValue('text');
    });

    test('check prop onChange', () => {
        const mockFunc = jest.fn();
        const value = 'hello';

        render(<AppInput onChange={mockFunc} />);
        const input = screen.getByTestId('input');

        fireEvent.change(input, { target: { value } });

        expect(mockFunc).toHaveBeenCalled();
        expect(mockFunc).toHaveBeenCalledTimes(1);
        expect(mockFunc).toHaveBeenCalledWith(value);
    });

    test('check prop placeholder', () => {
        const wrapper = render(<AppInput placeholder='placeholder' />);
        expect(screen.getByText(/placeholder/i)).toBeInTheDocument();

        wrapper.rerender(<AppInput />);

        expect(screen.queryByText(/placeholder/i)).toBeNull();
    });

    test('check prop autoFocus', () => {
        render(<AppInput autoFocus />);

        expect(screen.getByTestId('input')).toHaveFocus();
        expect(screen.getByTestId('curet')).toBeInTheDocument();
    });

    test('check input focus', () => {
        render(<AppInput />);
        const input = screen.getByTestId('input');

        input.focus();

        expect(input).toHaveFocus();
        expect(screen.getByTestId('curet')).toBeInTheDocument();

        input.blur();

        expect(input).not.toHaveFocus();
        expect(screen.queryByTestId('curet')).toBeNull();
    });

    test('check unmount', () => {
        const wrapper = render(<AppInput />);
        const input = screen.getByTestId('inputWrapper');

        expect(input).toBeInTheDocument();

        wrapper.unmount();

        expect(input).not.toBeInTheDocument();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
