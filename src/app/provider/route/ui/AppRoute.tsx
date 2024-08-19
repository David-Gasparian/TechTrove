import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { NewRouteProps } from '@/shared/types/router';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { RequireRoles } from './RequireRoles/RequireRoles';
import { appRoutesConfig } from '../config/configRoute';

export const AppRoute = memo(() => {
    const renderWithRoutes = (route: NewRouteProps) => {
        const element = route.authOnly
            ? (
                <ProtectedRoute>
                    <RequireRoles routeRoles={route.roles}>
                        {route.element}
                    </RequireRoles>
                </ProtectedRoute>
            )
            : route.element;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        {element}
                    </Suspense>
                )}
            />
        );
    };

    return (
        <Routes>
            {Object.values(appRoutesConfig).map(renderWithRoutes)}
        </Routes>
    );
});
