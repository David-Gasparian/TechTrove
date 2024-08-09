import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/provider/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Country } from '../../model/consts/consts';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {

    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: Country.ARMENIA,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    value: Country.ARMENIA,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    value: Country.ARMENIA,
    readOnly: true,
};
