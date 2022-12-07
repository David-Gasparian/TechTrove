import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema;
}
