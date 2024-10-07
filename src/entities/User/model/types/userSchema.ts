import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';
import { JsonSettings } from './jsonSettings';

export interface User {
    username: string;
    id: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
