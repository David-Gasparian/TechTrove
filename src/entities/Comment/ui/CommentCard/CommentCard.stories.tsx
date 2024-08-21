import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Comment } from '../../model/types/commentTypes';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment: Comment = {
    id: '1',
    text: 'text',
    user: {
        username: 'username',
        id: '1',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
};

export const Light = Template.bind({});
Light.args = { comment };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    comment,
};

export const Loading = Template.bind({});
Loading.args = {
    comment,
    isLoading: true,
};
