import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/provider/themeProvider';
import { ArticleView } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'features/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {
    view: ArticleView.BIG,
};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.Dark),
];
Dark.args = {
    view: ArticleView.SMALL,
};
