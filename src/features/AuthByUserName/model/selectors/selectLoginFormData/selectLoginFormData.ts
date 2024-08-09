import { StateSchema } from '@/app/provider/storeProvider';

export const selectLoginFormData = (state: StateSchema) => state.loginForm;
