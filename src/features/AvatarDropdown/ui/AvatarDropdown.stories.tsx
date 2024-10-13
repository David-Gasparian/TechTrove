import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';
import avatarImg from '../../../shared/assets/test/avatarImg.jpg';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [
        (Story) => (
            <HStack>
                <div style={{ padding: 150 }}>
                    <Story />
                </div>
                ,
            </HStack>
        ),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRole.USER],
            },
        },
    }),
];
Default.args = {
    avatar: avatarImg,
};

export const AdminUser = Template.bind({});
AdminUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRole.ADMIN],
            },
        },
    }),
];
AdminUser.args = {
    avatar: avatarImg,
};

export const ManagerUser = Template.bind({});
ManagerUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRole.MANAGER],
            },
        },
    }),
];
ManagerUser.args = {
    avatar: avatarImg,
};

export const NoRoles = Template.bind({});
NoRoles.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: undefined,
            },
        },
    }),
];
NoRoles.args = {
    avatar: avatarImg,
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
    avatar: '',
};
