import { Story } from '@storybook/react';
// eslint-disable-next-line feature-slice-import-manager/layer-imports
import { ThemeProvider } from '@/app/provider/themeProvider';
import { Theme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.className = theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`App ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
