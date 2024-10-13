import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';
import { DeprecatedSideBar } from '../DeprecatedSideBar/DeprecatedSideBar';
import cln from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <DeprecatedSideBar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    className={className}
                />
            }
            on={
                <aside
                    className={classNames(
                        cln.SidebarRedesigned,
                        { [cln.collapsed]: collapsed },
                        [className],
                    )}
                    data-testid="sideBar"
                >
                    <AppLogo className={cln.appLogo} />
                </aside>
            }
        />
    );
});
