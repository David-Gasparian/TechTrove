import { useContext } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { themeStorage } from 'shared/lib/storage/adapters/themeAdapter';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.Dark : Theme.LIGHT;
        setTheme(newTheme);
        themeStorage.setTheme(THEME_LOCAL_STORAGE_KEY, newTheme);
    };

    document.body.className = theme;

    return {
        theme,
        toggleTheme,
    };
};
