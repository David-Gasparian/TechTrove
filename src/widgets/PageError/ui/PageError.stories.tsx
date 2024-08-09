import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { PageError } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
