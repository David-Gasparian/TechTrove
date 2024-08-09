import { StateSchema } from '@/app/provider/storeProvider';
import { ArticleView } from '@/entities/Article';

export const selectArticleView = (state: StateSchema) => state?.articles?.view || ArticleView.SMALL;
