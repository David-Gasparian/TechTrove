import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecommendedArticlesList } from './RecommendedArticlesList';

export default {
    title: 'features/RecommendedArticlesList',
    component: RecommendedArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RecommendedArticlesList>;

const Template: ComponentStory<typeof RecommendedArticlesList> = (args) => <RecommendedArticlesList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
