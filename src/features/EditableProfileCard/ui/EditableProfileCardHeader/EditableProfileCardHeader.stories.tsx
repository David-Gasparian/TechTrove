import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readOnly: true,
};
