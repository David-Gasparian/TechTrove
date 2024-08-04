import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { NotificationType } from '../../model/types/notificationType';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    decorators: [
        (Story) => <div style={{ padding: 20 }}><Story /></div>,
    ],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    notification: {
        title: 'Default Notification',
        description: 'This is a default notification without a link.',
    } as NotificationType,
};

export const WithLink = Template.bind({});
WithLink.args = {
    notification: {
        title: 'Notification with Link',
        description: 'This notification contains a link. Click to open.',
        href: 'https://example.com',
    } as NotificationType,
};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.Dark),
];
Dark.args = {
    notification: {
        title: 'Custom Styled Notification',
        description: 'This notification uses a custom CSS class.',
    } as NotificationType,
};
