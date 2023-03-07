import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('articles');

    const { className } = props;

    return (
        <div
            className={classNames('', {}, [className])}
        >
            {t('article_details')}
        </div>
    );
});
