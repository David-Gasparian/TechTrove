import { FC } from "react";
import { Link } from "react-router-dom";

import { useTheme } from 'app/provider/themeProvider';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRoute } from "./provider/route";
import './styles/index.scss';

export const App: FC = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>
                togle
            </button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <AppRoute />
        </div>
    )
}
