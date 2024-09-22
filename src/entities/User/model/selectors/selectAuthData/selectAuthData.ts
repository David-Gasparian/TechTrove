import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useAuthData, selectAuthData] = buildSelector(
    (state: StateSchema) => state.user.authData,
);
