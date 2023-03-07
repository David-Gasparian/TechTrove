import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};
