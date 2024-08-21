import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'label',
    value: 'value 1',
    options: [
        { value: 'value 1', content: 'content 1' },
        { value: 'value 2', content: 'content 2' },
        { value: 'value 3', content: 'content 3' },
    ],
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    label: 'label',
    value: 'value 2',
    options: [
        { value: 'value 1', content: 'content 1' },
        { value: 'value 2', content: 'content 2' },
        { value: 'value 3', content: 'content 3' },
    ],
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    label: 'label',
    value: 'value 1',
    readOnly: true,
    options: [
        { value: 'value 1', content: 'content 1' },
        { value: 'value 2', content: 'content 2' },
        { value: 'value 3', content: 'content 3' },
    ],
};
