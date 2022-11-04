import { FC, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cln from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {

    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cln.SideBar, { [cln.collapsed]: collapsed }, [className])}>
            <button onClick={toggleCollapsed}>
                toggle
            </button>
            <div className={cln.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cln.langSwitcher}/>
            </div>
        </div>
    )
}

