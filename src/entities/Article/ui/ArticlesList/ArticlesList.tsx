import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';
import cln from './ArticlesList.module.scss';

interface ArticlesListProps {
    className?: string;
    view?: ArticleView;
    articles: Article[];
    isLoading?: boolean;
}

export const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className, view = ArticleView.SMALL, articles, isLoading,
    } = props;

    if (isLoading) {
        const isBig = view === ArticleView.BIG;
        const articleListForSkeleton = new Array(isBig ? 3 : 8).fill(1);

        return (
            <div
                className={classNames('', {}, [className, cln[view]])}
            >
                {articleListForSkeleton.map(() => (
                    <ArticlesListItemSkeleton
                        className={cln.articleItem}
                        view={view}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={classNames('', {}, [className, cln[view]])}
        >
            {!!articles.length
             && articles
                 .map((article) => (
                     <ArticlesListItem
                         className={cln.articleItem}
                         article={article}
                         key={article.id}
                         view={view}
                     />
                 ))}
        </div>
    );
});
