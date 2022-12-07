import { FC, useMemo, useState } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage
    .getItem(THEME_LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

 interface ThemeProviderProps {
    initialTheme?: Theme;
 }

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
