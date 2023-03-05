import { ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
    title: 'Components/Form/TextArea',
    component: TextArea,
    parameters: {},
} as ComponentMeta<typeof TextArea>;

export { default as Default } from './stories/TextArea';
