import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/provider/themeProvider';

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
