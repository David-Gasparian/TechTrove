import { StateSchema } from '@/app/provider/storeProvider';

export const selectCommentsError = (state: StateSchema) =>
    state?.articleDetailsPage?.articleDetailsComments?.error || '';
