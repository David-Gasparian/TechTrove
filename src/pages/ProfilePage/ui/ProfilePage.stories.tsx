import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const data = {
    first: 'David',
    lastname: 'Gasparyan',
    age: 22,
    currency: Currency.DOL,
    country: Country.AMERICA,
    city: 'Yerevan',
    username: 'admin',
};

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        profile: {
            data,
        },
    }),
];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        profile: {
            data,
        },
    }),
];
Dark.args = {};
