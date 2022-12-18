import { memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { sidebarItems } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cln from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;

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
                {sidebarItems.map((item) => (
                    <SideBarItem
                        key={item.path}
                        collapsed={collapsed}
                        item={item}
                    />
                ))}
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
});
