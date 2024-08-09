import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('check Sidebar', () => {
        componentRender(<SideBar />);
        const sideBar = screen.getByTestId('sideBar');

        expect(sideBar).toBeInTheDocument();
    });

    test('toggle collapse button', () => {
        componentRender(<SideBar />);
        const sideBar = screen.getByTestId('sideBar');
        const toggleButton = screen.getByTestId('toggleButton');

        fireEvent.click(toggleButton);

        expect(sideBar).toHaveClass('collapsed');
    });

    test('check prop className', () => {
        const className = 'className';
        componentRender(<SideBar className={className} />);
        expect(screen.getByTestId('sideBar')).toHaveClass(className);
    });

    test('check unmount', () => {
        const wrapper = componentRender(<SideBar />);

        expect(screen.getByTestId('sideBar')).toBeInTheDocument();

        wrapper.unmount();

        expect(screen.queryByTestId('sideBar')).toBeNull();
    });
});
