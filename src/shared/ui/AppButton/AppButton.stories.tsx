import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

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

export const Background = Template.bind({});
Background.args = {
    children: 'text',
    theme: AppButtonTheme.BACKGROUND,
};

export const InvertedBackground = Template.bind({});
InvertedBackground.args = {
    children: 'text',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
};

export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
    children: 'text',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    size: AppButtonSize.M,
};

export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
    children: 'text',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    size: AppButtonSize.L,
};

export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
    children: 'text',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    size: AppButtonSize.XL,
};
