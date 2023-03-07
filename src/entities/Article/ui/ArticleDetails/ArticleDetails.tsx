import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextALign, TextTheme } from 'shared/ui/Text/Text';
import { selectArticleLoading } from '../../model/selectors/selectIsLoading/selectArticleLoading';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { selectArticleData } from '../../model/selectors/selectArticleData/selectArticleData';
import { selectArticleError } from '../../model/selectors/selectArticleError/selectArticleError';
import cln from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const asyncReducersList: AsyncReducersList = {
    article: articleDetailsReducer,
};

export const ArticleDetailsComponent = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const articleData = useSelector(selectArticleData);
    const articleError = useSelector(selectArticleError);
    const isLoading = useSelector(selectArticleLoading);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    useEffect(() => {
        dispatch(fetchArticleById({ id }));
    }, [id, dispatch]);

    if (isLoading) {
        return (
            <div
                className={classNames(cln.articleDetails, {}, [className])}
            >
                <div className={cln.loadindg}>
                    <Skeleton className={cln.skeletonAvatar} width={200} height={200} border="50%" />
                    <Skeleton className={cln.skeletonTitle} width={670} height={31} />
                    <Skeleton className={cln.skeletonTitle} width={400} height={31} />
                    <Skeleton className={cln.skeletonBody} width="100%" height={231} />
                    <Skeleton className={cln.skeletonBody} width="100%" height={231} />
                </div>
            </div>
        );
    }

    if (articleError) {
        return (
            <div
                className={classNames(cln.articleDetails, {}, [className])}
            >
                <div className={cln.error}>
                    <Text align={TextALign.CENTER} theme={TextTheme.ERROR} text={t('article_error')} />
                </div>
            </div>
        );
    }

    return (
        <div
            className={classNames(cln.articleDetails, {}, [className])}
        >
            {t('article_details')}
        </div>
    );
});
