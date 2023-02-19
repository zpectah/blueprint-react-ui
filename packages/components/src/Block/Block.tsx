import React, { ElementType } from 'react';
import { BlockProps } from './types';
import { useBlockStyles } from './useBlockStyles';
import { BLOCK_DEFAULT_ELEMENT_TYPE } from './const';

const Block = <E extends ElementType = typeof BLOCK_DEFAULT_ELEMENT_TYPE>(props: BlockProps<E>) => {
    const { as: Component = BLOCK_DEFAULT_ELEMENT_TYPE, style, className, ...restProps } = props;

    const { ...styleProps } = useBlockStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Block;
