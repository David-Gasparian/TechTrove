import { useContext } from 'react';

import { THEME_LOCAL_STORAGE_KEY } from '../../consts/localStorage';
import { themeStorage } from '../../lib/storage/adapters/themeAdapter';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../../consts/theme';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

/**
 * Custom hook to manage and toggle the application theme.
 *
 * @interface UseThemeResult
 * @property {Theme} theme - The current theme.
 * @property {() => void} toggleTheme - Function to toggle between themes.
 *
 * @returns {UseThemeResult} - An object containing the current theme and a function to toggle the theme.
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 *
 * <button onClick={toggleTheme}>
 *   Toggle Theme
 * </button>
 */
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
