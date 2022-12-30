import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
    const options = [
        { value: '1', content: '1' },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('this elements should be in the document', () => {
        render(<Select
            options={options}
        />);
        expect(screen.getByTestId('wrapper')).toBeInTheDocument();
        expect(screen.getByTestId('select')).toBeInTheDocument();
    });

    test('check prop value', () => {
        render(<Select
            options={options}
            value="2"
        />);
        expect(screen.getByTestId('select')).toHaveValue('2');
    });

    test('check prop options', () => {
        render(<Select
            options={options}
        />);
        expect(screen.getAllByTestId('option')).toHaveLength(3);
        expect(screen.getAllByTestId('option')[0]).toHaveValue('1');
    });

    test('check prop label', () => {
        render(<Select
            options={options}
            label="select-label"
        />);
        expect(screen.getByTestId('label')).toBeInTheDocument();
        expect(screen.getByTestId('label')).toHaveTextContent('select-label');
        expect(screen.getByTestId('label')).toHaveClass('label');
    });

    test('check prop readOnly', () => {
        render(<Select
            options={options}
            readOnly
        />);
        expect(screen.getByTestId('wrapper')).toHaveClass('disabled');
        expect(screen.getByTestId('select')).toBeDisabled();
    });

    test('check prop onChange', () => {
        const mockFn = jest.fn();

        render(<Select
            options={options}
            onChange={mockFn}
        />);

        for (let i = 1; i <= 2; i++) {
            fireEvent.change(screen.getByTestId('select'), { target: { value: i.toString() } });
        }

        for (let i = 1; i <= 2; i++) {
            expect(mockFn).toHaveBeenCalledWith(i.toString());
        }
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledTimes(2);
    });
});
