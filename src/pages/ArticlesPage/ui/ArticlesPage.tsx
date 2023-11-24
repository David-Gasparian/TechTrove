import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
    ArticlesList, ArticleSortType, ArticleTypes, ArticleView,
} from 'entities/Article';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { Page } from 'widgets/Page/Page';
import {
    FilterArticles,
    filterArticlesSliceActions,
    selectArticleOrderType,
    selectArticleSearch,
    selectArticleSortType,
    selectArticleType,
} from 'features/FilterArticles';
import { SortingOrder } from 'shared/types/filterTypes';
import { useDebouncing } from 'shared/lib/hooks/useDebouncing';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { articlesPageActions, articlesPageReducer, articlesSelectors } from '../model/slice/articlesPageSlice';
import { selectArticlesLoading } from '../model/selectors/selectArticlesLoading/selectArticlesLoading';
import { selectArticleView } from '../model/selectors/selectArticleView/selectArticleView';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import cln from './ArticlesPage.module.scss';

const asyncReducersList: AsyncReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const articleView = useSelector(selectArticleView);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(articlesSelectors.selectAll);
    const articleSortType = useSelector(selectArticleSortType);
    const articleOrderType = useSelector(selectArticleOrderType);
    const articleSearch = useSelector(selectArticleSearch);
    const articleType = useSelector(selectArticleType);

    const [searchParams] = useSearchParams();

    const fetchCallback = useCallback(() => {
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    const debouncedClb = useDebouncing(fetchCallback, 400);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: false });

    useInitEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onViewChangeHandler = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onScrollToEnd = () => {
        dispatch(fetchNextArticles());
    };

    const onHandleSearchChange = useCallback((value: string) => {
        dispatch(filterArticlesSliceActions.setSearch(value));
        debouncedClb();
    }, [dispatch, debouncedClb]);

    const onHandleSortSelect = useCallback((value: ArticleSortType) => {
        dispatch(filterArticlesSliceActions.setSort(value));
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    const onHandleOrderSelect = useCallback((value: SortingOrder) => {
        dispatch(filterArticlesSliceActions.setOrder(value));
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    const onHandleTypeSelect = useCallback((value: ArticleTypes) => {
        dispatch(filterArticlesSliceActions.setType(value));
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    return (
        <Page isScrollSave onScrollToEnd={onScrollToEnd}>
            <div className={cln.filtersWrapper}>
                <FilterArticles
                    onHandleOrderSelect={onHandleOrderSelect}
                    onHandleSearchChange={onHandleSearchChange}
                    onHandleSortSelect={onHandleSortSelect}
                    onViewChangeHandler={onViewChangeHandler}
                    onHandleTypeSelect={onHandleTypeSelect}
                    articleOrderType={articleOrderType}
                    articleSortType={articleSortType}
                    articleSearch={articleSearch}
                    articleView={articleView}
                    articleType={articleType}
                />
            </div>
            <ArticlesList articles={articles} view={articleView} isLoading={loading} />
        </Page>
    );
});

export default ArticlesPage;
