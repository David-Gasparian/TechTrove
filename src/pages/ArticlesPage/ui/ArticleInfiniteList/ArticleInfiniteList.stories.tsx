import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticleInfiniteList from './ArticleInfiniteList';

export default {
    title: 'pages/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
