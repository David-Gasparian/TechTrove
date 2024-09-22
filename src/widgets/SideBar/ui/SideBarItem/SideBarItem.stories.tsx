import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from '@/shared/assets/icons/main.svg';
import { SideBarItem } from './SideBarItem';

export default {
    title: 'widgets/SideBarItem',
    component: SideBarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        item: {
            Icon: Main,
            path: '/',
            text: 'main',
        },
    },
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => (
    <SideBarItem {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
};
