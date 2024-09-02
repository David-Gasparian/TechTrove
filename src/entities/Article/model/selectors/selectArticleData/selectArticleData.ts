import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useArticleData, selectArticleData] = buildSelector((state: StateSchema) => state?.article?.data);
