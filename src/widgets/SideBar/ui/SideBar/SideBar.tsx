import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import Main from 'shared/assets/icons/main.svg';
import About from 'shared/assets/icons/about.svg';
import News from 'shared/assets/icons/news.svg';
import { appRoutePaths } from 'shared/config/configRoute.tsx/configRoute';
import cln from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation(['about', 'main', 'news']);

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cln.SideBar,
                { [cln.collapsed]: collapsed },
                [className],
            )}
            data-testid='sideBar'
        >
            <div className={cln.items}>
                <AppLink
                    className={cln.item}
                    to={appRoutePaths.main}
                >
                    <Main className={cln.icon} />
                    <span>{t('main', { ns: 'main' })}</span>
                </AppLink>
                <AppLink
                    className={cln.item}
                    to={appRoutePaths.about}
                >
                    <About className={cln.icon} />
                    <span>{t('about', { ns: 'about' })}</span>
                </AppLink>
                <AppLink
                    className={cln.item}
                    to={appRoutePaths.news}
                >
                    <News className={cln.icon} />
                    <span>{t('news', { ns: 'news' })}</span>
                </AppLink>
            </div>
            <AppButton
                data-testid='toggleButton'
                type="button"
                onClick={toggleCollapsed}
                className={cln.toggleButton}
                theme={AppButtonTheme.INVERTED_BACKGROUND}
                square
                size={AppButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cln.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cln.langSwitcher} />
            </div>
        </div>
    );
};
