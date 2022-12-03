import {
    act, fireEvent, render, screen,
} from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
    test('this elements should be in the document', () => {
        render(<Modal>Test</Modal>);
        expect(screen.getByTestId('modal')).toBeInTheDocument();
        expect(screen.getByTestId('overlay')).toBeInTheDocument();
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    test('check className prop', () => {
        const className = 'className';
        render(<Modal className={className}>Test</Modal>);
        expect(screen.getByTestId('modal')).toHaveClass(className);
    });

    test('opened class must be', () => {
        render(<Modal isOpen>Test</Modal>);
        expect(screen.getByTestId('modal')).toHaveClass('opened');
    });

    test('opened class must not be', () => {
        render(<Modal isOpen={false}>Test</Modal>);
        expect(screen.getByTestId('modal')).not.toHaveClass('opened');
    });

    test('check onClose prop', () => {
        jest.useFakeTimers();
        const mockFunc = jest.fn();

        render(<Modal onClose={mockFunc} isOpen>Test</Modal>);

        const overlay = screen.getByTestId('overlay');

        act(() => {
            fireEvent.click(overlay);
            jest.runAllTimers();
        });

        expect(overlay).toBeInTheDocument();
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });

    test('check setTimeOut inside Modal', () => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        const mockFunc = jest.fn();
        render(<Modal onClose={mockFunc}>Test</Modal>);

        const overlay = screen.getByTestId('overlay');

        act(() => {
            fireEvent.click(overlay);
            jest.runAllTimers();
        });

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });

    test('check childremn', () => {
        const children = 'text';
        render(<Modal isOpen>{children}</Modal>);
        const content = screen.getByText(children);

        expect(content).toBeTruthy();
    });

    test('check lazy prop', () => {
        render(<Modal isOpen={false} lazy>text</Modal>);
        expect(screen.queryByTestId('modal')).toBeNull();
    });

    test('check modal unmount', () => {
        const wrapper = render(<Modal className="className">Test</Modal>);
        const modal = screen.getByTestId('modal');

        expect(modal).toBeInTheDocument();

        wrapper.unmount();

        expect(modal).not.toBeInTheDocument();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
