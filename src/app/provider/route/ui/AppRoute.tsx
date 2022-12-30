import { selectAuthData } from 'entities/User';
import { memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { appRoutesConfig } from 'shared/config/configRoute.tsx/configRoute';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoute = memo(() => {
    const isAuth = useSelector(selectAuthData);

    const filteredRoutes = Object.values(appRoutesConfig).filter((item) => {
        if (item.authOnly && !isAuth) {
            return false;
        }

        return true;
    });

    return (
        <Routes>
            {filteredRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
});
