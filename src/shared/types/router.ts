import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type NewRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
