import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortingOrder } from '@/shared/types/filterTypes';
import { Select } from '@/shared/ui/Select';
import { OptionItem } from '@/shared/types/select';
import cln from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    onHandleOrderSelect: (value: SortingOrder) => void;
    order: SortingOrder;
    sortType: ArticleSortType;
    onHandleSortSelect: (value: ArticleSortType) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onHandleOrderSelect,
        onHandleSortSelect,
        order,
        sortType,
    } = props;

    const { t: tTranslation } = useTranslation('translation');
    const { t: tArticles } = useTranslation('articles');

    const sortOption = useMemo<OptionItem<ArticleSortType>[]>(
        () => [
            {
                value: ArticleSortType.TITLE,
                content: tArticles('article_title'),
            },
            {
                value: ArticleSortType.CREATED,
                content: tArticles('article_createdAt'),
            },
            {
                value: ArticleSortType.VIEWS,
                content: tArticles('article_views'),
            },
        ],
        [tArticles],
    );

    const orderOptions = useMemo<OptionItem<SortingOrder>[]>(
        () => [
            {
                value: SortingOrder.ASC,
                content: tTranslation('by_asc'),
            },
            {
                value: SortingOrder.DESC,
                content: tTranslation('by_desc'),
            },
        ],
        [tTranslation],
    );

    return (
        <div className={classNames(cln.ArticleSortSelector, {}, [className])}>
            <Select
                className={cln.sortBy}
                value={sortType}
                label={tArticles('article_sort_by')}
                options={sortOption}
                onChange={onHandleSortSelect}
            />
            <Select
                value={order}
                label={tArticles('article_by')}
                options={orderOptions}
                onChange={onHandleOrderSelect}
            />
        </div>
    );
});
