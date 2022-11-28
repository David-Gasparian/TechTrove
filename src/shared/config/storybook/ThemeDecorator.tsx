import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/provider/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
