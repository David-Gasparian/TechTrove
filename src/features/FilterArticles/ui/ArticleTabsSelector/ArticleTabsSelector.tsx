import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypes } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tab/Tabs';
import { getArticleTabs } from '../../model/lib/filterArticlesLib';

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

    const srticleTabs = getArticleTabs(t);

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
