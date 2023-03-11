import { ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
    title: 'Components/Form/Switch',
    component: Switch,
    parameters: {},
} as ComponentMeta<typeof Switch>;

export { default as Default } from './stories/Switch';
export { default as SwitchGroup } from './stories/SwitchGroup';
