import React, { ElementType } from 'react';
import { useThemeContext } from '../../../foundation/src';
import { BlockProps } from './types';

const Block = <E extends ElementType = 'div'>({ as, ...restProps }: BlockProps<E>) => {
    const Component = as || 'div';

    const { theme } = useThemeContext();

    return <Component {...restProps} />;
};

export default Block;
