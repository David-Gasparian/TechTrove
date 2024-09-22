import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useArticleError, selectArticleError] = buildSelector(
    (state: StateSchema) => state?.article?.error || '',
);
