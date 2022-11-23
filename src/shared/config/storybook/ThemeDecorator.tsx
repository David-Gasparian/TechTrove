import { Story } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`App ${theme}`}>
        <StoryComponent />
    </div>
);
