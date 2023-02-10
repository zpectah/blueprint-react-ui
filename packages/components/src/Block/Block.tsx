import React, { ElementType } from 'react';
import { BlockProps } from './types';

const Block = <E extends ElementType = 'div'>({ as, ...restProps }: BlockProps<E>) => {
    const Component = as || 'div';

    return <Component {...restProps} />;
};

export default Block;
