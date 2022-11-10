import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { appRoutesConfig } from 'shared/config/configRoute.tsx/configRoute';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoute: FC = () => (

    <Routes>
        {Object.values(appRoutesConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>

);
