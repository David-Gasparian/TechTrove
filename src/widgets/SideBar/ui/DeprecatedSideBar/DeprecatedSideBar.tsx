import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppButton,
    AppButtonSize,
    AppButtonTheme,
} from '@/shared/ui/deprecated/AppButton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { selectSidebarItems } from '../../model/selectors/selectSidebarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cln from '../SideBar/SideBar.module.scss';

interface SideBarProps {
    className?: string;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeprecatedSideBar = memo((props: SideBarProps) => {
    const { className, collapsed, setCollapsed } = props;

    const sidebarItemsList = useSelector(selectSidebarItems);

    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <aside
            className={classNames(cln.SideBar, { [cln.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sideBar"
        >
            <VStack role="navigation" className={cln.items} gap={8}>
                {sidebarItemsList.map((item) => (
                    <SideBarItem
                        key={item.path}
                        collapsed={collapsed}
                        item={item}
                    />
                ))}
            </VStack>
            <AppButton
                data-testid="toggleButton"
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
        </aside>
    );
});
