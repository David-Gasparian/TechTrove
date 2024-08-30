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
import {
    AppRouteNames,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
} from '@/shared/consts/router';
import { NewRouteProps } from '@/shared/types/router';

export const appRoutesConfig: Record<AppRouteNames, NewRouteProps> = {
    [AppRouteNames.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRouteNames.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRouteNames.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetails />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditorPage />,
        authOnly: true,
    },
    [AppRouteNames.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditorPage />,
        authOnly: true,
    },
    [AppRouteNames.ADMIN]: {
        path: getRouteAdmin(),
        element: <AdminPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRouteNames.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        authOnly: true,
    },

    // last
    [AppRouteNames.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFound />,
    },
};
