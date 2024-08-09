import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticlesInfinityList from './ArticlesInfinityList';

export default {
    title: 'pages/ArticlesInfinityList',
    component: ArticlesInfinityList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesInfinityList>;

const Template: ComponentStory<typeof ArticlesInfinityList> = (args) => <ArticlesInfinityList {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
