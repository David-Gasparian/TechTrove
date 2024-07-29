import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextALign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { selectArticleLoading } from '../../model/selectors/selectIsLoading/selectArticleLoading';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { selectArticleData } from '../../model/selectors/selectArticleData/selectArticleData';
import { selectArticleError } from '../../model/selectors/selectArticleError/selectArticleError';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockTypes } from '../../model/consts/consts';
import cln from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const asyncReducersList: AsyncReducersList = {
    article: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const articleData = useSelector(selectArticleData);
    const articleError = useSelector(selectArticleError);
    const isLoading = useSelector(selectArticleLoading);

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: true });

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;

        dispatch(fetchArticleById({ id }));
    }, [id, dispatch]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockTypes.CODE:
            return (
                <ArticleCodeBlockComponent className={cln.block} key={block.id} block={block} />
            );
        case ArticleBlockTypes.IMAGE:
            return (
                <ArticleImageBlockComponent className={cln.block} key={block.id} block={block} />
            );
        case ArticleBlockTypes.TEXT:
            return (
                <ArticleTextBlockComponent className={cln.block} key={block.id} block={block} />
            );
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        return (
            <div
                className={classNames(cln.articleDetails, {}, [className])}
            >
                <div className={cln.avatarWrapper}>
                    <Skeleton className={cln.avatar} width={200} height={200} border="50%" />
                </div>
                <Skeleton className={cln.title} width={670} height={31} />
                <Skeleton className={cln.title} width={400} height={31} />
                <div className={cln.blocksWrapper}>
                    <Skeleton className={cln.block} width="100%" height={231} />
                    <Skeleton className={cln.block} width="100%" height={231} />
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
            {articleData?.img && (
                <div className={cln.avatarWrapper}>
                    <div className={cln.avatar}>
                        <Avatar size={200} src={articleData.img} />
                    </div>
                </div>
            )}
            <Text className={cln.title} size={TextSize.L} title={articleData?.title} text={articleData?.subtitle} />
            <div className={cln.views}>
                <Icon SVG={EyeIcon} />
                <Text className={cln.text} text={String(articleData?.views)} />
            </div>
            <div className={cln.createdAt}>
                <Icon SVG={CalendarIcon} />
                <Text className={cln.text} text={articleData?.createdAt} />
            </div>
            <div className={cln.blocksWrapper}>
                {articleData?.blocks.map(renderBlock)}
            </div>
        </div>
    );
});
