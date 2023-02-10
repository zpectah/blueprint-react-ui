import { createElement } from 'react';
import { TagProps } from './types';

const Tag = ({ children, elementProps }: TagProps) => {

    return createElement(
        'span',
        { ...elementProps },
        children,
    );
};

export default Tag;
