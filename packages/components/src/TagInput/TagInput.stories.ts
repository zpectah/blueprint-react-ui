import { ComponentMeta } from '@storybook/react';
import TagInput from './TagInput';

export default {
    title: 'Components/Form/TagInput',
    component: TagInput,
    parameters: {},
} as ComponentMeta<typeof TagInput>;

export { default as Default } from './stories/TagInput';
