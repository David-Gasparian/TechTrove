import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ArticleSortType, ArticleTypes, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { SortingOrder } from '@/shared/types/filterTypes';
import { useDebouncing } from '@/shared/lib/hooks/useDebouncing';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { AppInput } from '@/shared/ui/deprecated/AppInput';
import { ArticleTabsSelector } from '@/features/ArticleTabsSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { selectArticleView } from '../../model/selectors/selectArticleView/selectArticleView';
import { useArticlesPageActions } from '../../model/slice/articlesPageSlice';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { selectArticleSortType } from '../../model/selectors/selectArticleSortType/selectArticleSortType';
import { selectArticleOrderType } from '../../model/selectors/selectArticleOrderType/selectArticleOrderType';
import { selectArticleSearch } from '../../model/selectors/selectArticleSearch/selectArticleSearch';
import { selectArticleType } from '../../model/selectors/selectArticleType/selectArticleType';
import cln from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const articleView = useSelector(selectArticleView);
    const articleSortType = useSelector(selectArticleSortType);
    const articleOrderType = useSelector(selectArticleOrderType);
    const articleSearch = useSelector(selectArticleSearch);
    const articleType = useSelector(selectArticleType);

    const { setView, setSearch, setSort, setOrder, setType } =
        useArticlesPageActions();

    const { t } = useTranslation('articles');

    const fetchCallback = useCallback(() => {
        dispatch(fetchArticles({ page: 1, replace: true }));
    }, [dispatch]);

    const debouncedClb = useDebouncing(fetchCallback, 400);

    const onViewChangeHandler = useCallback((view: ArticleView) => {
        setView(view);
    }, []);

    const onHandleSearchChange = useCallback(
        (value: string) => {
            setSearch(value);
            debouncedClb();
        },
        [debouncedClb],
    );

    const onHandleSortSelect = useCallback(
        (value: ArticleSortType) => {
            setSort(value);
            dispatch(fetchArticles({ page: 1, replace: true }));
        },
        [dispatch],
    );

    const onHandleOrderSelect = useCallback(
        (value: SortingOrder) => {
            setOrder(value);
            dispatch(fetchArticles({ page: 1, replace: true }));
        },
        [dispatch],
    );

    const onHandleTypeSelect = useCallback(
        (value: ArticleTypes) => {
            setType(value);
            dispatch(fetchArticles({ page: 1, replace: true }));
        },
        [dispatch],
    );

    return (
        <VStack max className={classNames(cln.FilterArticles, {}, [className])}>
            <HStack justify="spaceBetween" className={cln.sortWrapper}>
                <ArticleSortSelector
                    order={articleOrderType}
                    sortType={articleSortType}
                    onHandleSortSelect={onHandleSortSelect}
                    onHandleOrderSelect={onHandleOrderSelect}
                />
                <ArticleViewSwitcher
                    view={articleView}
                    onChange={onViewChangeHandler}
                />
            </HStack>

            <AppInput
                autoFocus
                placeholder={t('article_search')}
                value={articleSearch}
                onChange={onHandleSearchChange}
                className={cln.searchInput}
            />
            <ArticleTabsSelector
                className={cln.articleTabs}
                value={articleType}
                onTabSelect={onHandleTypeSelect}
            />
        </VStack>
    );
});

export default ArticlesPageFilters;
