import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { NotFound } from './NotFound';

export default {
    title: 'pages/NotFound',
    component: NotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
