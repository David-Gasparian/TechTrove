import { ComponentStory, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        title: { control: 'text', defaultValue: 'Rate this article' },
        feedbackTitle: { control: 'text', defaultValue: 'Your feedback' },
        hasFeedback: { control: 'boolean', defaultValue: true },
        cancel: { action: 'cancel' },
        accept: { action: 'accept' },
    },
} as Meta;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Rate this article',
    feedbackTitle: 'Your feedback',
    hasFeedback: true,
    cancel: action('Cancel rating'),
    accept: action('Accept rating'),
};

export const WithoutFeedback = Template.bind({});
WithoutFeedback.args = {
    title: 'Rate this article',
    feedbackTitle: 'Your feedback',
    hasFeedback: false,
    cancel: action('Cancel rating'),
    accept: action('Accept rating'),
};
