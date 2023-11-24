import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { appRoutePaths } from 'shared/config/configRoute/configRoute';
import { selectCanEdit } from '../../model/selectors/selectCanEdit/selectCanEdit';
import cln from './ArticleDetailsPageHeader.module.scss';

const ArticleDetailsPageHeader: FC = memo(() => {
    const { t } = useTranslation('articles');
    const navigate = useNavigate();
    const canEdit = useSelector(selectCanEdit);

    const onGoBackHandler = useCallback(() => {
        navigate(appRoutePaths.articles);
    }, [navigate]);

    const onArticleCreateHandler = useCallback(() => {
        navigate(appRoutePaths.article_create);
    }, [navigate]);

    const onArticleEditHandler = useCallback(() => {
        navigate(appRoutePaths.article_edit);
    }, [navigate]);

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
});

export default ArticleDetailsPageHeader;
