import { FC, ReactElement, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden } from '@/shared/consts/router';

interface RequireRolesProps {
    routeRoles?: UserRole[];
}

export const RequireRoles: FC<RequireRolesProps> = (props) => {
    const { children, routeRoles } = props;
    const location = useLocation();
    const userRoles = useSelector(selectUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!routeRoles) {
            return true;
        }

        return routeRoles?.some((routeRole) => userRoles?.includes(routeRole));
    }, [userRoles, routeRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ form: location }} replace />;
    }

    return children as ReactElement;
};
