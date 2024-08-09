import { TFunction } from 'i18next';

import { ArticleSortType, ArticleTypes } from '@/entities/Article';
import { SortingOrder } from '@/shared/types/filterTypes';
import { OptionItem } from '@/shared/types/types';

export const getSortOptions = (t:TFunction): OptionItem<ArticleSortType>[] => ([
    {
        value: ArticleSortType.TITLE,
        content: t('article_title'),
    },
    {
        value: ArticleSortType.CREATED,
        content: t('article_createdAt'),
    },
    {
        value: ArticleSortType.VIEWS,
        content: t('article_views'),
    },
]);

export const getOrderOptions = (t: TFunction): OptionItem<SortingOrder>[] => ([
    {
        value: SortingOrder.ASC,
        content: t('by_asc'),
    },
    {
        value: SortingOrder.DESC,
        content: t('by_desc'),
    },
]);

export const getArticleTabs = (t: TFunction): OptionItem<ArticleTypes>[] => ([
    {
        value: ArticleTypes.ALL,
        content: t('article_all'),
    },
    {
        value: ArticleTypes.IT,
        content: t('article_it'),
    },
    {
        value: ArticleTypes.ECONOMICS,
        content: t('article_economics'),
    },
    {
        value: ArticleTypes.SCIENCE,
        content: t('article_science'),
    },
]);
