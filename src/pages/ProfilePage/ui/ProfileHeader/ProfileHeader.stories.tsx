import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ProfileHeader } from './ProfileHeader';

export default {
    title: 'pages/ProfileHeader',
    component: ProfileHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => <ProfileHeader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readOnly: true,
};
