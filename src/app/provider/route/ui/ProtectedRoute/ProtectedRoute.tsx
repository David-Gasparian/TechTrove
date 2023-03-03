import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthData } from 'entities/User';
import { appRoutePaths } from 'shared/config/configRoute.tsx/configRoute';

export const ProtectedRoute: FC = (props) => {
    const { children } = props;
    const location = useLocation();
    const isAuth = useSelector(selectAuthData);

    if (!isAuth) {
        return <Navigate to={appRoutePaths.main} state={{ form: location }} replace />;
    }

    return <div>{children}</div>;
};
