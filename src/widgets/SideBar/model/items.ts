import React from 'react';

import { appRoutePaths } from 'shared/config/configRoute.tsx/configRoute';
import Main from 'shared/assets/icons/main.svg';
import About from 'shared/assets/icons/about.svg';
import News from 'shared/assets/icons/news.svg';
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
        path: appRoutePaths.news,
        text: 'news',
        Icon: News,
    },
    {
        path: appRoutePaths.profile,
        text: 'profile',
        Icon: Profile,
        authOnly: true,
    },
];
