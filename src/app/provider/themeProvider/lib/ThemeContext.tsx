import React from 'react';

export enum Theme {
    LIGHT = 'app_light',
    Dark = 'app_dark',
    GREEN = 'app_green',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});
