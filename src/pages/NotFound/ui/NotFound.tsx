import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cln from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = memo((props: NotFoundProps) => {
    const { className } = props;

    const { t } = useTranslation('main');

    return (
        <Page className={classNames(cln.notFound, {}, [className])}>
            {t('not_found')}
        </Page>
    );
});
