import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticlesList, ArticleView } from 'entities/Article';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { articlesPageActions, articlesPageReducer, articlesSelectors } from '../model/slice/articlesPageSlice';
import { selectArticlesLoading } from '../model/selectors/selectArticlesLoading/selectArticlesLoading';
import { fetchArticles } from '../model/services/fetchArticles';
import { selectArticleView } from '../model/selectors/selectArticleView/selectArticleView';

const asyncReducersList: AsyncReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const articleView = useSelector(selectArticleView);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    useAsyncReducer(asyncReducersList);

    useInitEffect(() => {
        dispatch(fetchArticles());
        dispatch(articlesPageActions.initState());
    });

    const onViewChangeHandler = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div>
            <ArticleViewSwitcher view={articleView} onChange={onViewChangeHandler} />
            <ArticlesList articles={articles} view={articleView} isLoading={loading} />
        </div>
    );
});

export default ArticlesPage;
