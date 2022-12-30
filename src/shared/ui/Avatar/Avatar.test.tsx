import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    test('check src prop', () => {
        render(<Avatar
            src="test"
        />);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
        expect(screen.getByTestId('avatar')).toHaveAttribute('src', 'test');
    });

    test('check alt prop', () => {
        render(<Avatar
            alt="test"
        />);
        expect(screen.getByTestId('avatar')).toHaveAttribute('alt', 'test');
    });

    test('check size prop', () => {
        render(<Avatar
            size={100}
        />);
        expect(screen.getByTestId('avatar')).toHaveStyle({ width: '100px', height: '100px' });
    });

    test('if size is incorrect', () => {
        render(<Avatar
            size={0}
        />);
        expect(screen.getByTestId('avatar')).toHaveStyle({ width: '100px', height: '100px' });
    });
});
