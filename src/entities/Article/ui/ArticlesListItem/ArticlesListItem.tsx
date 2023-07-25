import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import Eye from 'shared/assets/icons/eye.svg';
import { useHover } from 'shared/lib/hooks/useHover';
import { appRoutePaths } from 'shared/config/configRoute.tsx/configRoute';
import {
    Article, ArticleBlockTypes, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cln from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
    className?: string;
    view?: ArticleView;
    article: Article;
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const { className, article, view = ArticleView.SMALL } = props;
    const {
        title,
        img,
        views,
        createdAt,
        type,
        user,
        id,
        blocks,
    } = article;

    const [isHover, bindHover] = useHover();
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const types = <Text className={cln.types} text={type.join(', ')} />;
    const viewsBlock = (
        <div className={cln.view}>
            <Text className={cln.viewCount} text={String(views)} />
            <Icon SVG={Eye} />
        </div>
    );

    const onReadMoreHadler = useCallback(() => {
        navigate(appRoutePaths.article_details + id);
    }, [id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = blocks.find((block) => block.type === ArticleBlockTypes.TEXT) as ArticleTextBlock;

        return (
            <Card
                className={classNames(cln.ArticlesListItem, {}, [className, cln[view]])}
            >
                <div className={cln.header}>
                    <div className={cln.userInfo}>
                        <Avatar
                            src={user.avatar}
                            size={30}
                            alt="avatar"
                        />
                        <Text className={cln.userName} text={user.username} />
                    </div>
                    <Text className={cln.createdDate} text={createdAt} />
                </div>
                {types}
                <div className={cln.imageWrapper}>
                    <img className={cln.image} src={img} alt={title} />
                </div>
                <ArticleTextBlockComponent
                    className={cln.block}
                    key={textBlock.id}
                    block={textBlock}
                />
                <div className={cln.footer}>
                    <AppButton
                        className={cln.loginBtn}
                        theme={AppButtonTheme.OUTLINED}
                        onClick={onReadMoreHadler}
                    >
                        {t('article_read_more')}
                    </AppButton>
                    {viewsBlock}
                </div>
            </Card>

        );
    }

    return (
        <Card
            {...bindHover}
            onClick={onReadMoreHadler}
            className={classNames(cln.ArticlesListItem, { [cln.cardHover]: isHover }, [className, cln[view]])}
        >
            <div className={cln.imageWrapper}>
                <img className={cln.image} src={img} alt={title} />
                {isHover && <Text className={cln.createdDate} text={createdAt} />}
            </div>
            <div className={cln.infoWrapper}>
                {types}
                {viewsBlock}
            </div>
            <Text className={cln.title} text={title} />
        </Card>
    );
});
