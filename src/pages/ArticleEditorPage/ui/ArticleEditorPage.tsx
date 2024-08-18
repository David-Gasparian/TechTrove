import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

const ArticleEditorPage = memo(() => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const isCreate = !id;

    return (
        <Page
            className={classNames('', {})}
        >
            {isCreate ? t('articles_create') : t('articles_edit')}
        </Page>
    );
});

export default ArticleEditorPage;
