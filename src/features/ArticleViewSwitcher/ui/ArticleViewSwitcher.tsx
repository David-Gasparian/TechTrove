import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton/AppButton';
import ViewSmall from '@/shared/assets/icons/viewSmall.svg';
import ViewBig from '@/shared/assets/icons/viewBig.svg';
import { ArticleView } from '@/entities/Article';
import { ArticleViews } from '../model/types/ArticleViewSwitcherSchema';
import cln from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    className?: string;
    onChange?: (view: ArticleView) => void;
    view: ArticleView;
}

const articleViews: ArticleViews[] = [
    {
        icon: ViewSmall,
        view: ArticleView.SMALL,
    },
    {
        icon: ViewBig,
        view: ArticleView.BIG,
    },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {
        className,
        onChange,
        view,
    } = props;

    const onViewChangeHandler = (view: ArticleView) => () => {
        onChange?.(view);
    };

    const renderViews = (articleView: ArticleViews) => (
        <AppButton
            onClick={onViewChangeHandler(articleView.view)}
            key={articleView.view}
            data-testid='loginBtn'
            theme={AppButtonTheme.CLEAR}
            className={cln.loginBtn}
        >
            <Icon
                className={classNames(cln.viewSmallIcon, { [cln.selected]: view === articleView.view })}
                SVG={articleView.icon}
            />
        </AppButton>
    );

    return (
        <div
            className={classNames(cln.ArticleViewSwitcher, {}, [className])}
        >
            {articleViews.map(renderViews)}
        </div>
    );
});
