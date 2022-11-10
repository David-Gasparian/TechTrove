import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';
import { NotFound } from 'pages/NotFound';

export enum AppRouteNames {
    ABOUT = 'about',
    NEWS = 'news',
    MAIN = 'main',
    NOT_FOUND = 'notFound',
}

export const appRoutePaths: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.NEWS]: '/news',
    [AppRouteNames.MAIN]: '/',
    [AppRouteNames.NOT_FOUND]: '*',
};

export const appRoutesConfig: Record<AppRouteNames, RouteProps> = {
    [AppRouteNames.ABOUT]: {
        path: appRoutePaths.about,
        element: <AboutPage />,
    },
    [AppRouteNames.NEWS]: {
        path: appRoutePaths.news,
        element: <NewsPage />,
    },
    [AppRouteNames.MAIN]: {
        path: appRoutePaths.main,
        element: <MainPage />,
    },
    [AppRouteNames.NOT_FOUND]: {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
};
