export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER= 'USER',
}

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
