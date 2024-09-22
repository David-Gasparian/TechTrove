import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/consts/theme';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import avatarImg from '@/shared/assets/test/avatarImg.jpg';
import { ProfileCard } from './ProfileCard';

const data = {
    id: '1',
    first: 'David',
    lastname: 'Gasparyan',
    age: 22,
    currency: Currency.DOL,
    country: Country.AMERICA,
    city: 'Yerevan',
    username: 'admin',
    avatar: avatarImg,
};

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    profileData: data,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    profileData: data,
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readOnly: true,
    profileData: data,
};
