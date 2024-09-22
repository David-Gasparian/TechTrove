import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { SidebarItemType } from '../../model/types/sidebarTypes';
import { SideBarItem } from './SideBarItem';

describe('SideBarItem', () => {
    const item: SidebarItemType = {
        Icon: () => <div />,
        path: '/',
        text: 'text',
    };

    test('check item prop', () => {
        componentRender(<SideBarItem item={item} />);
        const sidebarItem = screen.getByTestId('sidebar-item');

        expect(sidebarItem).toBeInTheDocument();
        expect(sidebarItem).toHaveAttribute('href', '/');
        expect(screen.getByText('text')).toBeInTheDocument();
    });

    test('check collapsed prop', () => {
        componentRender(<SideBarItem collapsed item={item} />);

        expect(screen.getByTestId('sidebar-item')).toHaveClass('collapsed');
    });

    test('if user is not authorised', () => {
        const item: SidebarItemType = {
            path: '/',
            text: 'text',
            Icon: () => <div />,
            authOnly: true,
        };

        componentRender(<SideBarItem item={item} />, {
            initialValue: {
                user: {
                    authData: undefined,
                },
            },
        });

        expect(screen.queryByTestId('sidebar-item')).toBeNull();
    });

    test('check unmount', () => {
        const wrapper = componentRender(<SideBarItem item={item} />);

        expect(screen.getByTestId('sidebar-item')).toBeInTheDocument();

        wrapper.unmount();

        expect(screen.queryByTestId('sidebar-item')).toBeNull();
    });
});
