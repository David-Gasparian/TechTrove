import { ComponentStory, Meta } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    decorators: [
        (Story) => (
            <div style={{ padding: 50 }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Default = Template.bind({});
Default.args = {
    size: 30,
    selectedStars: 0,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    size: 20,
    selectedStars: 0,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    size: 50,
    selectedStars: 0,
};

export const PreSelectedStars = Template.bind({});
PreSelectedStars.args = {
    size: 30,
    selectedStars: 3,
};

export const FullySelectedStars = Template.bind({});
FullySelectedStars.args = {
    size: 30,
    selectedStars: 5,
};
