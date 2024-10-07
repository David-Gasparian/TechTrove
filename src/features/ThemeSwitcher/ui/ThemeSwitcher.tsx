import { memo } from 'react';

import LightTheme from '@/shared/assets/icons/theme-light.svg';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const handleToggleTheme = () => {
        toggleTheme((newTheme: Theme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    };

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            onClick={handleToggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </AppButton>
    );
});
