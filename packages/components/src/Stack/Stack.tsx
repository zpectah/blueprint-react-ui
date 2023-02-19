import React, { ElementType } from 'react';
import { StackProps, StackElementType } from './types';
import { useStackStyles } from './useStackStyles';
import { STACK_DEFAULT_ELEMENT_TYPE } from './const';

const Stack = <E extends StackElementType & ElementType = typeof STACK_DEFAULT_ELEMENT_TYPE>(props: StackProps<E>) => {
    const { as: Component = STACK_DEFAULT_ELEMENT_TYPE, style, className, ...restProps } = props;

    const { ...styleProps } = useStackStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Stack;
