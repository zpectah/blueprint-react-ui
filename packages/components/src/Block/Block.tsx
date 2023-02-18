import React, { ElementType } from 'react';
import { BlockProps } from './types';
import { useBlockStyles } from './useBlockStyles';

const Block = <E extends ElementType = 'div'>(props: BlockProps<E>) => {
    const { as: Component = 'div', style, className, ...restProps } = props;

    const { ...styleProps } = useBlockStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Block;
