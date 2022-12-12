import { StateSchema } from 'app/provider/storeProvider';

export const selectUserPassword = (state: StateSchema) => state.loginForm?.password || '';
