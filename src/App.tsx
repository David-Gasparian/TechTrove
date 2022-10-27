import { FC, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { AboutPage } from "./components/AboutPage/index";
import { NewsPage } from "./components/NewsPage/index";
import MainPage from "./components/MainPage/MainPage";
import './index.scss';

export const App: FC = () => {
    return (
        <div className='App'>
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
