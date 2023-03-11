import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
    title: 'Components/Form/TextInput',
    component: TextInput,
    parameters: {},
} as ComponentMeta<typeof TextInput>;

export { default as Base } from './stories/TextInputBase';
export { default as Default } from './stories/TextInput';
export { default as Multiline } from './stories/TextInputMultiline';
