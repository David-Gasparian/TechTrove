import {
    fireEvent, screen,
} from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
    test('this elements should be in the document', () => {
        componentRender(<LoginForm />);

        expect(screen.getByTestId('loginForm')).toBeInTheDocument();
        expect(screen.getByTestId('userName')).toBeInTheDocument();
        expect(screen.getByTestId('password')).toBeInTheDocument();
        expect(screen.getByTestId('loginBtn')).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'className';
        componentRender(<LoginForm className={className} />);

        expect(screen.getByTestId('loginForm')).toHaveClass(className);
    });

    test('check userName input', () => {
        componentRender(<LoginForm />);
        const value = 'userName';
        const userName = screen.getByTestId('userName');

        fireEvent.change(userName, { target: { value } });

        expect(userName).toHaveValue(value);
    });

    test('check password input', () => {
        componentRender(<LoginForm />);
        const value = 'password';
        const password = screen.getByTestId('password');

        fireEvent.change(password, { target: { value } });

        expect(password).toHaveValue(value);
    });

    test('check unmount', () => {
        const wrapper = componentRender(<LoginForm />);
        const loginForm = screen.getByTestId('loginForm');

        expect(loginForm).toBeInTheDocument();

        wrapper.unmount();

        expect(loginForm).not.toBeInTheDocument();
    });
});
