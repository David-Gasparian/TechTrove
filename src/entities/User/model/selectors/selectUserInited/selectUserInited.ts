import { StateSchema } from 'app/provider/storeProvider';

export const selectUserInited = (state: StateSchema) => state.user._inited;
