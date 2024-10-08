import { StateSchema } from '@/app/provider/storeProvider';
import { SortingOrder } from '@/shared/types/filterTypes';

export const selectArticleOrderType = (state: StateSchema) =>
    state?.articles?.order || SortingOrder.ASC;
