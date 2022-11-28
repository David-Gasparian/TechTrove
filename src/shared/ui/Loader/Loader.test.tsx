import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    test('check loader', () => {
        render(<Loader />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test('check className prop', () => {
        const className = 'loader';
        render(<Loader className={className} />);
        expect(screen.getByTestId('loader')).toHaveClass(className);
    });

    test('check unmount', () => {
        const wrapper = render(<Loader />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();

        wrapper.unmount();

        expect(loader).not.toBeInTheDocument();
    });
});
