import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/storeProvider';
import { UserRole } from '../../consts/consts';

export const selectUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isRoleAdmin = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isRoleManager = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
