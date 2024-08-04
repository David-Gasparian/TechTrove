import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from 'shared/ui/Stack';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        direction: {
            control: {
                type: 'select',
                options: ['top left', 'top right', 'bottom left', 'bottom right'],
            },
        },
    },
    decorators: [
        (Story) => (
            <HStack>
                <div style={{ padding: 150 }}><Story /></div>
            </HStack>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

const trigger = <button type='button'>Open Popover</button>;
const children = <div style={{ width: 130, paddingTop: 5 }}>Popover Content</div>;

export const Default = Template.bind({});
Default.args = {
    trigger,
    children,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left' as DropdownDirection,
    trigger,
    children,
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right' as DropdownDirection,
    trigger,
    children,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left' as DropdownDirection,
    trigger,
    children,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right' as DropdownDirection,
    trigger,
    children,
};
