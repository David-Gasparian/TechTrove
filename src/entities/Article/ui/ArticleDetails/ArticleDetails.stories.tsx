import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleDetailsComponent } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetailsComponent',
    component: ArticleDetailsComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComponent>;

const Template: ComponentStory<typeof ArticleDetailsComponent> = (args) => <ArticleDetailsComponent {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
};
