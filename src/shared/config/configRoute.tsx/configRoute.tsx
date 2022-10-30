import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NewsPage } from "pages/NewsPage";


export enum AppRoutesNames {
    ABOUT = 'about',
    NEWS = 'news',
    MAIN = 'main',
}

export const appRoutesPaths: Record<AppRoutesNames, string> = {
    [AppRoutesNames.ABOUT]: '/about',
    [AppRoutesNames.NEWS]: '/news',
    [AppRoutesNames.MAIN]: '/'
}

export const appRoutesConfig: Record<AppRoutesNames, RouteProps> = {
    [AppRoutesNames.ABOUT]: {
        path: appRoutesPaths.about,
        element: <AboutPage />
    },
    [AppRoutesNames.NEWS]: {
        path: appRoutesPaths.news,
        element: <NewsPage />
    },
    [AppRoutesNames.MAIN]: {
        path: appRoutesPaths.main,
        element: <MainPage />
    }
}