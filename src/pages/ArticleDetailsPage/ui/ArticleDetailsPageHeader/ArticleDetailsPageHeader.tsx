import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppButton, AppButtonTheme } from '@/shared/ui/deprecated/AppButton';
import {
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteArticles,
} from '@/shared/consts/router';
import { selectCanEdit } from '../../model/selectors/selectCanEdit/selectCanEdit';
import cln from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    id: string;
}

const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { id } = props;

        const { t } = useTranslation('articles');
        const navigate = useNavigate();
        const canEdit = useSelector(selectCanEdit);

        const onGoBackHandler = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onArticleCreateHandler = useCallback(() => {
            navigate(getRouteArticleCreate());
        }, [navigate]);

        const onArticleEditHandler = useCallback(() => {
            navigate(getRouteArticleEdit(id));
        }, [navigate, id]);

        return (
            <div className={cln.articleDetailsPageHeader}>
                <AppButton
                    theme={AppButtonTheme.OUTLINED}
                    onClick={onGoBackHandler}
                >
                    {t('article_go_back')}
                </AppButton>

                <div>
                    <AppButton
                        theme={AppButtonTheme.OUTLINED}
                        onClick={onArticleCreateHandler}
                    >
                        {t('articles_create')}
                    </AppButton>
                    {canEdit && (
                        <AppButton
                            className={cln.editBtn}
                            theme={AppButtonTheme.OUTLINED}
                            onClick={onArticleEditHandler}
                        >
                            {t('articles_edit')}
                        </AppButton>
                    )}
                </div>
            </div>
        );
    },
);

export default ArticleDetailsPageHeader;
