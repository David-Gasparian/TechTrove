import { memo } from 'react';

import { Theme, useTheme } from '@/app/provider/themeProvider';
import LightTheme from '@/shared/assets/icons/theme-light.svg';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton/AppButton';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </AppButton>
    );
});
