import { ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {},
} as ComponentMeta<typeof Tag>;

export { default as Default } from './stories/Tag';
