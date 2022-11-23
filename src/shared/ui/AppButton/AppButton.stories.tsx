import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';

import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { AppButton, AppButtonTheme } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: AppButtonTheme.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.decorators = [ThemeDecorator(Theme.Dark)];
OutlinedDark.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
};
