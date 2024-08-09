import { useContext } from 'react';

import { THEME_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { themeStorage } from '@/shared/lib/storage/adapters/themeAdapter';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme;

        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.Dark;
            break;
        case Theme.Dark:
            newTheme = Theme.GREEN;
            break;
        case Theme.GREEN:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        themeStorage.setTheme(THEME_LOCAL_STORAGE_KEY, newTheme);
    };

    document.body.className = theme || Theme.LIGHT;

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
