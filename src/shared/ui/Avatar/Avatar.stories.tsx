import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import avatarImg from '../../assets/test/avatarImg.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: avatarImg,
};

export const Small = Template.bind({});
Small.args = {
    src: avatarImg,
    size: 50,
};

export const Alt = Template.bind({});
Alt.args = {
    alt: 'avatar',
};
