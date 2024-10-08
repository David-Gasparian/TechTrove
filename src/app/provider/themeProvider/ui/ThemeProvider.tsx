import { FC, useEffect, useMemo, useState } from 'react';

import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;

    const { theme: defaultTheme } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
