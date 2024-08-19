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
import { AppRouteNames, appRoutePaths } from '@/shared/consts/router';
import { NewRouteProps } from '@/shared/types/router';

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
