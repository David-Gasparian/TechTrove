import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticlesList, ArticleView } from 'entities/Article';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { Page } from 'widgets/Page/Page';
import { articlesPageActions, articlesPageReducer, articlesSelectors } from '../model/slice/articlesPageSlice';
import { selectArticlesLoading } from '../model/selectors/selectArticlesLoading/selectArticlesLoading';
import { selectArticleView } from '../model/selectors/selectArticleView/selectArticleView';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

const asyncReducersList: AsyncReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const articleView = useSelector(selectArticleView);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: false });

    useInitEffect(() => {
        dispatch(initArticlesPage());
    });

    const onViewChangeHandler = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onScrollToEnd = () => {
        dispatch(fetchNextArticles());
    };

    return (
        <Page isScrollSave onScrollToEnd={onScrollToEnd}>
            <ArticleViewSwitcher view={articleView} onChange={onViewChangeHandler} />
            <ArticlesList articles={articles} view={articleView} isLoading={loading} />
        </Page>

    );
});

export default ArticlesPage;
