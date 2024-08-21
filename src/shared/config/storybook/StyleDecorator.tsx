import { Story } from '@storybook/react';
// eslint-disable-next-line feature-slice-import-manager/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: Story) => (
    <div>
        <StoryComponent />
    </div>
);
