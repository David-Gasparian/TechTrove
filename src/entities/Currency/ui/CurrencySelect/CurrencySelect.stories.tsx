import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Currency } from '../../medel/types/curencyTypes';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {

    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: Currency.RU,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    value: Currency.RU,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    value: Currency.RU,
    readOnly: true,
};
