import { createElement } from 'react';
import { useThemeContext } from '../../../foundation/src';
import { TagProps } from './types';

const Tag = ({ children, elementProps }: TagProps) => {
    const { theme } = useThemeContext();

    return createElement(
        'span',
        { ...elementProps },
        children,
    );
};

export default Tag;
