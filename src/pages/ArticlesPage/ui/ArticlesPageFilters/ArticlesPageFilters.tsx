import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
    ArticleSortType, ArticleTypes, ArticleView,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    FilterArticles,
    filterArticlesSliceActions,
    selectArticleOrderType,
    selectArticleSearch,
    selectArticleSortType,
    selectArticleType,
} from '@/features/FilterArticles';
import { SortingOrder } from '@/shared/types/filterTypes';
import { useDebouncing } from '@/shared/lib/hooks/useDebouncing';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { selectArticleView } from '../../model/selectors/selectArticleView/selectArticleView';

const ArticlesPageFilters: FC = memo(() => {
    const dispatch = useAppDispatch();
    const articleView = useSelector(selectArticleView);
    const articleSortType = useSelector(selectArticleSortType);
    const articleOrderType = useSelector(selectArticleOrderType);
    const articleSearch = useSelector(selectArticleSearch);
    const articleType = useSelector(selectArticleType);

    const fetchCallback = useCallback(() => {
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    const debouncedClb = useDebouncing(fetchCallback, 400);

    const onViewChangeHandler = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

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
    );
});

export default ArticlesPageFilters;
