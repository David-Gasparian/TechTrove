import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useArticleLoading, selectArticleLoading] = buildSelector(
    (state: StateSchema) => state?.article?.isLoading,
);
