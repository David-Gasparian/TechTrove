import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('check Counter', () => {
        componentRender(<Counter />);
        expect(screen.getByTestId('counter')).toBeInTheDocument();
    });

    test('check increment', () => {
        componentRender(
            <Counter />,
            { initialValue: { counter: { value: 1 } } },
        );
        const incrementButton = screen.getByTestId('increment-button');

        fireEvent.click(incrementButton);

        expect(screen.getByTestId('counter-title').textContent).toBe('2');
    });

    test('check decrement', () => {
        componentRender(
            <Counter />,
            { initialValue: { counter: { value: 4 } } },
        );
        const decrementButton = screen.getByTestId('decrement-button');

        fireEvent.click(decrementButton);

        expect(screen.getByTestId('counter-title')).toHaveTextContent('3');
    });

    test('check unmount', () => {
        const wrapper = componentRender(<Counter />);

        expect(screen.getByTestId('counter')).toBeInTheDocument();

        wrapper.unmount();

        expect(screen.queryByTestId('counter')).toBeNull();
    });
});
