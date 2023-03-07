import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
};
