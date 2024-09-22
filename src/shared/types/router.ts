import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line feature-slice-import-manager/layer-imports
import { UserRole } from '@/entities/User';

export type NewRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
