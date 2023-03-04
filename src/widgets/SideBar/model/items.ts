import React from 'react';

import { appRoutePaths } from 'shared/config/configRoute.tsx/configRoute';
import Main from 'shared/assets/icons/main.svg';
import About from 'shared/assets/icons/about.svg';
import Articles from 'shared/assets/icons/articles.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean;
}

export const sidebarItems: SidebarItemType[] = [
    {
        path: appRoutePaths.main,
        text: 'main',
        Icon: Main,
    },
    {
        path: appRoutePaths.about,
        text: 'about',
        Icon: About,
    },
    {
        path: appRoutePaths.profile,
        text: 'profile',
        Icon: Profile,
        authOnly: true,
    },
    {
        path: appRoutePaths.articles,
        text: 'articles',
        Icon: Articles,
        authOnly: true,
    },
];
