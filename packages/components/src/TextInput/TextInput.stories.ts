import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
    title: 'Components/Form/TextInput',
    component: TextInput,
    parameters: {},
} as ComponentMeta<typeof TextInput>;

export { default as Default } from './stories/TextInput';
