import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 100,
};

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    border: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.decorators = [ThemeDecorator(Theme.Dark)];
NormalDark.args = {
    width: '100%',
    height: 100,
};

export const CircleDark = Template.bind({});
CircleDark.decorators = [ThemeDecorator(Theme.Dark)];
CircleDark.args = {
    width: 100,
    height: 100,
    border: '50%',
};
