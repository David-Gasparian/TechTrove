import React from 'react';

export enum Theme {
    LIGHT = 'app_light',
    Dark = 'app_dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});
