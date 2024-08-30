import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthData } from '@/entities/User';
import { getRouteMain } from '@/shared/consts/router';

export const ProtectedRoute: FC = (props) => {
    const { children } = props;
    const location = useLocation();
    const isAuth = useSelector(selectAuthData);

    if (!isAuth) {
        return <Navigate to={getRouteMain()} state={{ form: location }} replace />;
    }

    return children as ReactElement;
};
