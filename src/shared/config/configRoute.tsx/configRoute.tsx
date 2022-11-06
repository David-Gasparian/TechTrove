import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';

export enum AppRouteNames {
    ABOUT = 'about',
    NEWS = 'news',
    MAIN = 'main',
}

export const appRoutePaths: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.NEWS]: '/news',
    [AppRouteNames.MAIN]: '/',
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
};
