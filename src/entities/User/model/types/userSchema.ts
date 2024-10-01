import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';

export interface User {
    username: string;
    id: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
