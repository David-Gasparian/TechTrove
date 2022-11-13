import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/classNames/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('check Sidebar', () => {
        renderWithTranslation(<SideBar />);
        const sideBar = screen.getByTestId('sideBar');

        expect(sideBar).toBeInTheDocument();
    });

    test('toggle collapse button', () => {
        renderWithTranslation(<SideBar />);
        const sideBar = screen.getByTestId('sideBar');
        const toggleButton = screen.getByTestId('toggleButton');

        fireEvent.click(toggleButton);

        expect(sideBar).toHaveClass('collapsed');
    });
});
