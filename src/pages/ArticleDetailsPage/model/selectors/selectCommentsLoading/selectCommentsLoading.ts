import { StateSchema } from 'app/provider/storeProvider';

export const selectCommentsLoading = (state: StateSchema) => state?.articleDetailsPage
    ?.articleDetailsComments?.isLoading;
