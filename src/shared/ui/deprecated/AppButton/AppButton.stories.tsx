import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
    <AppButton {...args} />
);

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: AppButtonTheme.CLEAR,
};

export const InvertedClear = Template.bind({});
InvertedClear.args = {
    children: 'text',
    theme: AppButtonTheme.INVERTED_CLEAR,
};
export const Outlined = Template.bind({});
Outlined.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
};

export const OutlinedRed = Template.bind({});
OutlinedRed.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED_RED,
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

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
    size: AppButtonSize.M,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
    size: AppButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'text',
    theme: AppButtonTheme.OUTLINED,
    size: AppButtonSize.XL,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: AppButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: AppButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: AppButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: AppButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: AppButtonSize.XL,
    disabled: true,
};
