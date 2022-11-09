import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { appRoutesConfig } from 'shared/config/configRoute.tsx/configRoute';

export const AppRoute: FC = () => {
    const { t } = useTranslation('about');

    return (
        <Suspense fallback={<div>{t('Loading')}</div>}>
            <Routes>
                {Object.values(appRoutesConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
