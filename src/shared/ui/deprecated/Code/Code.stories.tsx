import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: `
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Theme } from 'app/provider/themeProvider';

    import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
    import { Code } from './Code';

    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    `,
};
