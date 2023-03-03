import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRouteNames {
    ABOUT = 'about',
    NEWS = 'news',
    MAIN = 'main',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'notFound',
}

export const appRoutePaths: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.NEWS]: '/news',
    [AppRouteNames.PROFILE]: '/profile',
    [AppRouteNames.MAIN]: '/',

    // last
    [AppRouteNames.NOT_FOUND]: '*',
};

export type NewRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const appRoutesConfig: Record<AppRouteNames, NewRouteProps> = {
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
    [AppRouteNames.PROFILE]: {
        path: appRoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },

    // last
    [AppRouteNames.NOT_FOUND]: {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
};
