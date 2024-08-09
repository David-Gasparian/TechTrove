import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { ArticleSortType, ArticleTypes, ArticleView } from '@/entities/Article';
import { AppInput } from '@/shared/ui/AppInput/AppInput';
import { AsyncReducersList, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { SortingOrder } from '@/shared/types/filterTypes';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    filterArticlesSliceReducer,
} from '../../model/slice/filterArticlesSliceSlice';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { ArticleTabsSelector } from '../ArticleTabsSelector/ArticleTabsSelector';
import cln from './FilterArticles.module.scss';

const asyncReducersList: AsyncReducersList = {
    filterArticlesForm: filterArticlesSliceReducer,
};

interface FilterArticlesProps {
    className?: string;
    onViewChangeHandler: (view: ArticleView) => void;
    articleView: ArticleView;
    onHandleOrderSelect: (value: SortingOrder) => void;
    articleOrderType: SortingOrder;
    articleSortType: ArticleSortType;
    articleSearch: string;
    onHandleSortSelect: (value: ArticleSortType) => void;
    onHandleSearchChange: (value: string) => void;
    onHandleTypeSelect: (type: ArticleTypes) => void;
    articleType: ArticleTypes
}

export const FilterArticles = memo((props: FilterArticlesProps) => {
    const {
        className,
        onViewChangeHandler,
        articleView,
        onHandleOrderSelect,
        onHandleSortSelect,
        articleOrderType,
        articleSortType,
        onHandleSearchChange,
        articleSearch,
        onHandleTypeSelect,
        articleType,
    } = props;
    const { t } = useTranslation('articles');

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: false });

    return (
        <VStack
            max
            className={classNames(cln.FilterArticles, {}, [className])}
        >
            <HStack justify='spaceBetween' className={cln.sortWrapper}>
                <ArticleSortSelector
                    order={articleOrderType}
                    sortType={articleSortType}
                    onHandleSortSelect={onHandleSortSelect}
                    onHandleOrderSelect={onHandleOrderSelect}
                />
                <ArticleViewSwitcher view={articleView} onChange={onViewChangeHandler} />
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
