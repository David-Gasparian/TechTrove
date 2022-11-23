import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import NewsPage from './NewsPage';

export default {
    title: 'pages/NewsPage',
    component: NewsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewsPage>;

const Template: ComponentStory<typeof NewsPage> = (args) => <NewsPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
