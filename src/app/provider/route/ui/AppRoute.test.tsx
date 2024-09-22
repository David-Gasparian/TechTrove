import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import {
    getRouteAbout,
    getRouteProfile,
    getRouteAdmin,
} from '@/shared/consts/router';
import { AppRoute } from './AppRoute';

describe('app/router/AppRouter', () => {
    test('The page should render', async () => {
        componentRender(<AppRoute />, {
            path: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRoute />, {
            path: '/asfasfasfasf',
        });

        const page = await screen.findByTestId('NotFound');
        expect(page).toBeInTheDocument();
    });

    test('Redirect of unauthorized user to the main page', async () => {
        componentRender(<AppRoute />, {
            path: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to a restricted page for an authorized user', async () => {
        componentRender(<AppRoute />, {
            path: getRouteProfile('1'),
            initialValue: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access denied (no role)', async () => {
        componentRender(<AppRoute />, {
            path: getRouteAdmin(),
            initialValue: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access granted (role present)', async () => {
        componentRender(<AppRoute />, {
            path: getRouteAdmin(),
            initialValue: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
