import React, { ElementType } from 'react';
import { BlockProps } from './types';

const Block = <C extends ElementType = 'div'>({ as, ...restProps }: BlockProps<C>) => {
    const Component = as || 'div';

    return <Component {...restProps} />;
};

export default Block;
