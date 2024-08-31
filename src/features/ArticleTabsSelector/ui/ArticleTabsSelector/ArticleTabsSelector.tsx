import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypes } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs } from '@/shared/ui/Tabs';

interface ArticleTabsSelectorProps {
    className?: string;
    value: ArticleTypes;
    onTabSelect: (value: ArticleTypes) => void;
}

export const ArticleTabsSelector = memo((props: ArticleTabsSelectorProps) => {
    const {
        className,
        onTabSelect,
        value,
    } = props;

    const { t } = useTranslation('articles');

    const srticleTabs = useMemo(() => [
        {
            value: ArticleTypes.ALL,
            content: t('article_all'),
        },
        {
            value: ArticleTypes.IT,
            content: t('article_it'),
        },
        {
            value: ArticleTypes.ECONOMICS,
            content: t('article_economics'),
        },
        {
            value: ArticleTypes.SCIENCE,
            content: t('article_science'),
        },
    ], [t]);

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <Tabs
                onTabClick={onTabSelect}
                value={value}
                tabs={srticleTabs}
            />
        </div>
    );
});
