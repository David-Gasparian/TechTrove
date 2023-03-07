import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
