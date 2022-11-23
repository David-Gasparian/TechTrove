import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (StoryComponent: Story) => (
    <div>
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    </div>
);
