import { UserRole } from '../consts/consts';

export interface User {
    username: string;
    id: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
