import { createElement } from 'react';
import { TagProps } from './types';
import { useTagStyles } from './useTagStyles';

const Tag = ({ children, elementProps, style, className }: TagProps) => {
    const { ...styleProps } = useTagStyles({ style, className });

    return createElement(
        'span',
        { ...styleProps, ...elementProps },
        children,
    );
};

export default Tag;
