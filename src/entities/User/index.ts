export { userActions, userReducer } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/userSchema';
export { UserRole } from './model/consts/consts';
export {
    selectAuthData,
    useAuthData,
} from './model/selectors/selectAuthData/selectAuthData';
export { useUserInited } from './model/selectors/selectUserInited/selectUserInited';
export {
    isRoleAdmin,
    isRoleManager,
    selectUserRoles,
} from './model/selectors/selectUserRoles/selectUserRoles';
export {
    useJsonSettings,
    selectJsonSettings,
} from './model/selectors/selectJsonSettings/selectJsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
