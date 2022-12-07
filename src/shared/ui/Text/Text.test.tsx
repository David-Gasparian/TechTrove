import { render, screen } from '@testing-library/react';
import { Text, TextTheme } from './Text';

describe('Text', () => {
    test('this element should be in the document', () => {
        render(<Text />);
        expect(screen.getByTestId('textWrapper')).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'text';
        render(<Text className={className} />);
        expect(screen.getByTestId('textWrapper')).toHaveClass(className);
    });

    test('check prop title', () => {
        const title = 'header';
        render(<Text title={title} />);
        expect(screen.getByTestId('title')).toBeInTheDocument();
    });

    test('check prop text', () => {
        const text = 'text';
        const wrapper = render(<Text text={text} />);
        expect(screen.getByTestId('text')).toBeInTheDocument();

        wrapper.rerender(<Text />);

        expect(screen.queryByText(text)).toBeNull();
    });

    test('with primary theme', () => {
        render(<Text theme={TextTheme.PRIMARY} />);
        expect(screen.getByTestId('textWrapper')).toHaveClass('primary');
    });

    test('with error theme', () => {
        render(<Text theme={TextTheme.ERROR} />);
        expect(screen.getByTestId('textWrapper')).toHaveClass('error');
    });

    test('check unmount', () => {
        const wrapper = render(<Text />);
        const text = screen.getByTestId('textWrapper');
        expect(text).toBeInTheDocument();

        wrapper.unmount();

        expect(text).not.toBeInTheDocument();
    });
});
