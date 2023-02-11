import React, { ElementType } from 'react';
import { BlockProps } from './types';
import { useBlockStyles } from './useBlockStyles';

const Block = <E extends ElementType = 'div'>({ as, style, className, ...restProps }: BlockProps<E>) => {
    const Component = as || 'div';

    const { ...styleProps } = useBlockStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Block;
