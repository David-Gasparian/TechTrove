import { StateSchema } from 'app/provider/storeProvider';
import { UserRole } from '../../consts/consts';
import { isRoleAdmin, isRoleManager } from './selectUserRoles';

describe('Selectors', () => {
    const createState = (roles?: UserRole[]): DeepPartial<StateSchema> => ({
        user: {
            authData: {
                roles,
            },
        },
    });

    describe('isRoleAdmin', () => {
        test('should return true if the user has an admin role', () => {
            const state = createState([UserRole.ADMIN, UserRole.MANAGER]);
            expect(isRoleAdmin(state as StateSchema)).toBe(true);
        });

        test('should return false if the user does not have an admin role', () => {
            const state = createState([UserRole.MANAGER]);
            expect(isRoleAdmin(state as StateSchema)).toBe(false);
        });

        test('should return false if the user roles are undefined', () => {
            const state = createState(undefined);
            expect(isRoleAdmin(state as StateSchema)).toBe(false);
        });
    });

    describe('isRoleManager', () => {
        test('should return true if the user has a manager role', () => {
            const state = createState([UserRole.MANAGER, UserRole.ADMIN]);
            expect(isRoleManager(state as StateSchema)).toBe(true);
        });

        test('should return false if the user does not have a manager role', () => {
            const state = createState([UserRole.ADMIN]);
            expect(isRoleManager(state as StateSchema)).toBe(false);
        });

        test('should return false if the user roles are undefined', () => {
            const state = createState(undefined);
            expect(isRoleManager(state as StateSchema)).toBe(false);
        });
    });
});
