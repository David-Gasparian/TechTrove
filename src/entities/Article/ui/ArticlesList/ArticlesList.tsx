import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';
import { ArticleView } from '../../model/consts/consts';
import cln from './ArticlesList.module.scss';

interface ArticlesListProps {
    className?: string;
    view?: ArticleView;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    const isBig = view === ArticleView.BIG;
    const articleListForSkeleton = new Array(isBig ? 3 : 6).fill(1);

    return articleListForSkeleton.map((_: number, inedx: number) => (
        <ArticlesListItemSkeleton
            key={inedx.toString()}
            view={view}
        />
    ));
};

export const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className, view = ArticleView.SMALL, articles, isLoading, target,
    } = props;

    const { t } = useTranslation('articles');

    if (!isLoading && !articles.length) {
        return (
            <Text
                className={cln.emptyText}
                text={(t('articles_empty'))}
            />
        );
    }

    return (
        <div
            className={classNames('', {}, [className, cln[view]])}
        >
            {
                articles
                    .map((article) => (
                        <ArticlesListItem
                            article={article}
                            key={article.id}
                            view={view}
                            target={target}
                        />
                    ))
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
