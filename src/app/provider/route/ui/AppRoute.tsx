import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { appRoutesConfig, NewRouteProps } from 'shared/config/configRoute.tsx/configRoute';
import { PageLoader } from 'widgets/PageLoader';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

export const AppRoute = memo(() => {
    const renderWithRoutes = (route: NewRouteProps) => {
        const element = route.authOnly ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element;

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
