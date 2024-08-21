import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('check switcher', () => {
        componentRender(<LangSwitcher />);
        const sideBar = screen.getByTestId('langSwitcher');

        expect(sideBar).toBeInTheDocument();
    });

    test('check prop className', () => {
        const className = 'className';
        componentRender(<LangSwitcher className={className} />);
        expect(screen.getByTestId('langSwitcher')).toHaveClass(className);
    });

    test('with short', () => {
        componentRender(<LangSwitcher short />);
        expect(screen.getByTestId('langSwitcher').textContent).toEqual('short_language');
    });

    test('with long', () => {
        componentRender(<LangSwitcher short={false} />);
        expect(screen.getByTestId('langSwitcher').textContent).toEqual('language');
    });

    test('check unmount', () => {
        const wrapper = componentRender(<LangSwitcher />);

        expect(screen.getByTestId('langSwitcher')).toBeInTheDocument();

        wrapper.unmount();

        expect(screen.queryByTestId('langSwitcher')).toBeNull();
    });
});
