import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/consts/theme';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, totam provident minima ipsa saepe voluptates, laudantium veniam at quis odit aspernatur repellendus accusamus culpa impedit nam et quisquam maiores corrupti.',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, totam provident minima ipsa saepe voluptates, laudantium veniam at quis odit aspernatur repellendus accusamus culpa impedit nam et quisquam maiores corrupti.',
};
