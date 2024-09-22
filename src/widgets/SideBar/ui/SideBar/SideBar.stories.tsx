import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';
import { SideBar } from './SideBar';

export default {
    title: 'widgets/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
    <SideBar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];
Dark.args = {};

export const NotAuth = Template.bind({});
NotAuth.decorators = [
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];
NotAuth.args = {};
