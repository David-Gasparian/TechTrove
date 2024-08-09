import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticlesPageFilters from './ArticlesPageFilters';

export default {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
