import { FC } from "react";

import { useTheme } from 'app/provider/themeProvider';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRoute } from "./provider/route";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

export const App: FC = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <AppRoute />
        </div>
    )
}
