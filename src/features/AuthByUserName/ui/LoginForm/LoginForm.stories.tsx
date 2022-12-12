import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({
    loginForm: {
        password: 'password',
        username: 'username',
    },
})];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    StoreDecorator({
        loginForm: {
            password: 'password',
            username: 'username',
        },
    }),
    ThemeDecorator(Theme.Dark),
];
Dark.args = {};

export const WithError = Template.bind({});
WithError.decorators = [
    StoreDecorator({
        loginForm: {
            error: 'error',
        },
    }),
];
WithError.args = {};

export const WithLoading = Template.bind({});
WithLoading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
WithLoading.args = {};
