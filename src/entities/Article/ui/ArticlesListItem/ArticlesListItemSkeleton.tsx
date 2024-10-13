import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cln from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
    className?: string;
    view?: ArticleView;
}

export const ArticlesListItemSkeleton = memo((props: ArticlesListItemProps) => {
    const { className, view = ArticleView.SMALL } = props;

    if (view === ArticleView.BIG) {
        return (
            <Card
                className={classNames(cln.ArticlesListItem, {}, [
                    className,
                    cln[view],
                ])}
            >
                <div className={cln.header}>
                    <div className={cln.userInfo}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton
                            className={cln.userName}
                            width={50}
                            height={15}
                        />
                    </div>
                </div>
                <Skeleton className={cln.types} width={200} height={25} />
                <Skeleton
                    className={cln.imageWrapper}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={cln.imageWrapper}
                    width="100%"
                    height={25}
                />
            </Card>
        );
    }

    return (
        <Card
            className={classNames(cln.ArticlesListItem, {}, [
                className,
                cln[view],
            ])}
        >
            <Skeleton className={cln.imageWrapper} width="100%" height={200} />
            <div className={cln.infoWrapper}>
                <Skeleton className={cln.types} width={150} height={25} />
            </div>
            <Skeleton className={cln.title} width="100%" height={25} />
        </Card>
    );
});
