import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import {
    ArticlesList,
} from 'entities/Article';
import { articlesSelectors } from '../../model/slice/articlesPageSlice';
import { selectArticleView } from '../../model/selectors/selectArticleView/selectArticleView';
import { selectArticlesLoading } from '../../model/selectors/selectArticlesLoading/selectArticlesLoading';

export const ArticlesInfinityList: FC = memo(() => {
    const articleView = useSelector(selectArticleView);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    return (
        <ArticlesList articles={articles} view={articleView} isLoading={loading} />
    );
});
