import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cln from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('');

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
            <AppButton
                data-testid='toggleButton'
                type="button"
                onClick={toggleCollapsed}
            >
                toggle
            </AppButton>
            <div className={cln.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cln.langSwitcher} />
            </div>
        </div>
    );
};
