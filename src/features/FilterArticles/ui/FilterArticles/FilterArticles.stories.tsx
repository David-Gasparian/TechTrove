import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterArticles } from './FilterArticles';

export default {
    title: 'features/FilterArticles',
    component: FilterArticles,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterArticles>;

const Template: ComponentStory<typeof FilterArticles> = (args) => <FilterArticles {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
