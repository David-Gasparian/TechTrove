import { FC, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { AboutPage } from "./components/AboutPage/index";
import { NewsPage } from "./components/NewsPage/index";
import MainPage from "./components/MainPage/MainPage";
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
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
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="news" element={<NewsPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
