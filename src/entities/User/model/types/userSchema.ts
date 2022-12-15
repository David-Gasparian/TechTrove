export interface User {
    name: string;
    id: number;
}

export interface UserSchema {
    authData?: User;
}
