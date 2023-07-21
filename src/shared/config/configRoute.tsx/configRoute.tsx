import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetails } from 'pages/ArticleDetailsPage';

export enum AppRouteNames {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',

    // last
    NOT_FOUND = 'notFound',
}

export const appRoutePaths: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.PROFILE]: '/profile/', // :id
    [AppRouteNames.ARTICLES]: '/articles',
    [AppRouteNames.ARTICLE_DETAILS]: '/articles/', // :id
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
    [AppRouteNames.MAIN]: {
        path: appRoutePaths.main,
        element: <MainPage />,
    },
    [AppRouteNames.PROFILE]: {
        path: `${appRoutePaths.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLES]: {
        path: appRoutePaths.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLE_DETAILS]: {
        path: `${appRoutePaths.article_details}:id`,
        element: <ArticleDetails />,
        authOnly: true,
    },

    // last
    [AppRouteNames.NOT_FOUND]: {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
};
