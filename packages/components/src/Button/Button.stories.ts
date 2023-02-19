import { ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {},
} as ComponentMeta<typeof Button>;

export { default as Default } from './stories/Button';
export { default as ButtonVariant } from './stories/ButtonVariant';
export { default as ButtonSize } from './stories/ButtonSize';
export { default as ButtonColor } from './stories/ButtonColor';
