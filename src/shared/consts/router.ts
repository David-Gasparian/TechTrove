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
