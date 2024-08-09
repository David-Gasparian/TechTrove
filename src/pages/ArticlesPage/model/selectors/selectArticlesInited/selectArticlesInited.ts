import { StateSchema } from '@/app/provider/storeProvider';

export const selectArticlesInited = (state: StateSchema) => state?.articles?._inited || false;
