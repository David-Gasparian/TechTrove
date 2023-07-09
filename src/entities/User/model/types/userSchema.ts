export interface User {
    username: string;
    id: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
