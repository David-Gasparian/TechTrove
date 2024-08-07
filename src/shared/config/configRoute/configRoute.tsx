import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetails } from '@/pages/ArticleDetailsPage';
import { ArticleEditorPage } from '@/pages/ArticleEditorPage';
import { AdminPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export enum AppRouteNames {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN = 'admin',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'notFound',
}

export const appRoutePaths: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.PROFILE]: '/profile/', // :id
    [AppRouteNames.ARTICLES]: '/articles',
    [AppRouteNames.ARTICLE_DETAILS]: '/articles/', // :id
    [AppRouteNames.ARTICLE_CREATE]: '/article/create',
    [AppRouteNames.ARTICLE_EDIT]: '/article/:id/edit',
    [AppRouteNames.ADMIN]: '/admin',
    [AppRouteNames.FORBIDDEN]: '/forbidden',
    [AppRouteNames.MAIN]: '/',

    // last
    [AppRouteNames.NOT_FOUND]: '*',
};

export type NewRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
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
    [AppRouteNames.ARTICLE_CREATE]: {
        path: appRoutePaths.article_create,
        element: <ArticleEditorPage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLE_EDIT]: {
        path: appRoutePaths.article_edit,
        element: <ArticleEditorPage />,
        authOnly: true,
    },
    [AppRouteNames.ADMIN]: {
        path: appRoutePaths.admin,
        element: <AdminPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRouteNames.FORBIDDEN]: {
        path: appRoutePaths.forbidden,
        element: <ForbiddenPage />,
        authOnly: true,
    },

    // last
    [AppRouteNames.NOT_FOUND]: {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
};
