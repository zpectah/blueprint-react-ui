import { ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Components/Form/Select',
    component: Select,
    parameters: {},
} as ComponentMeta<typeof Select>;

export { default as Base } from './stories/SelectBase';
export { default as Default } from './stories/Select';
export { default as SelectWithGroup } from './stories/SelectWithGroup';
