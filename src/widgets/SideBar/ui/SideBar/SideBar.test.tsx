import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
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
});
