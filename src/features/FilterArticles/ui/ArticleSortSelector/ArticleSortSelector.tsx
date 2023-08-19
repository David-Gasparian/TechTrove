import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortType } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortingOrder } from 'shared/types/filterTypes';
import { Select } from 'shared/ui/Select/Select';
import { getOrderOptions, getSortOptions } from '../../model/lib/filterArticlesLib';
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

    return (
        <div
            className={classNames(cln.ArticleSortSelector, {}, [className])}
        >
            <Select
                className={cln.sortBy}
                value={sortType}
                label={tArticles('article_sort_by')}
                options={getSortOptions(tArticles)}
                onChange={onHandleSortSelect}
            />
            <Select
                value={order}
                label={tArticles('article_by')}
                options={getOrderOptions(tTranslation)}
                onChange={onHandleOrderSelect}
            />
        </div>
    );
});
