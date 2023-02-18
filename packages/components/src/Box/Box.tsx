import React, { ElementType } from 'react';
import { BoxProps, BoxElementType } from './types';
import { useBoxStyles } from './useBoxStyles';

const Box = <E extends BoxElementType & ElementType = 'div'>({ as, style, className, ...restProps }: BoxProps<E>) => {
    const Component = as || 'div';

    const { ...styleProps } = useBoxStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Box;
