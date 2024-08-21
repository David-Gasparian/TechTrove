import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { AppLink, APPLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    theme: APPLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
PrimaryDark.args = {
    children: 'text',
    theme: APPLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    theme: APPLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ThemeDecorator(Theme.Dark)];
SecondaryDark.args = {
    children: 'text',
    theme: APPLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'text',
    theme: APPLinkTheme.RED,
};
