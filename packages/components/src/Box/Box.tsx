import React, { ElementType } from 'react';
import { BoxProps, BoxElementType } from './types';
import { useBoxStyles } from './useBoxStyles';
import { BOX_DEFAULT_ELEMENT_TYPE } from './const';

const Box = <E extends BoxElementType & ElementType = typeof BOX_DEFAULT_ELEMENT_TYPE>(props: BoxProps<E>) => {
    const { as: Component = BOX_DEFAULT_ELEMENT_TYPE, style, className, ...restProps } = props;

    const { ...styleProps } = useBoxStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Box;
