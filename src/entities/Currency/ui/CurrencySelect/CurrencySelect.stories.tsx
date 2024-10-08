import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Currency } from '../../medel/consts/consts';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

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
