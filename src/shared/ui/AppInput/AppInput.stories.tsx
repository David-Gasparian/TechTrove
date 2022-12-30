import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppInput } from './AppInput';

export default {
    title: 'shared/AppInput',
    component: AppInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Light = Template.bind({});
Light.args = {
    autoFocus: true,
    placeholder: 'placeholder',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    autoFocus: true,
    placeholder: 'placeholder',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readOnly: true,
    placeholder: 'placeholder',
};
