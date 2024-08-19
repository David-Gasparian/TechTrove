import { StateSchema } from '@/app/provider/storeProvider';
import Main from '@/shared/assets/icons/main.svg';
import About from '@/shared/assets/icons/about.svg';
import Articles from '@/shared/assets/icons/articles.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import { appRoutePaths } from '@/shared/consts/router';

export const selectSidebarItems = (state: StateSchema) => {
    const { authData } = state.user;

    const sidebarItems = [
        {
            path: appRoutePaths.main,
            text: 'main',
            Icon: Main,
            authOnly: false,
        },
        {
            path: appRoutePaths.about,
            text: 'about',
            Icon: About,
            authOnly: false,
        },
    ];

    if (authData) {
        sidebarItems.push(
            {
                path: `${appRoutePaths.profile}${authData.id}`,
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
        );
    }

    return sidebarItems;
};
