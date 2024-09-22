import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { Text, TextALign, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    theme: TextTheme.ERROR,
};

export const AlignError = Template.bind({});
AlignError.args = {
    title: 'something went wrong',
    text: 'refresh page',
    theme: TextTheme.ERROR,
    align: TextALign.CENTER,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    size: TextSize.L,
};
