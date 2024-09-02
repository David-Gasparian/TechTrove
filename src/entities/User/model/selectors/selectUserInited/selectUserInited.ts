import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useUserInited, selectUserInited] = buildSelector((state: StateSchema) => state.user._inited);
