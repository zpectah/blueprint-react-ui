import React, { ElementType } from 'react';
import { StackProps, StackElementType } from './types';
import { useStackStyles } from './useStackStyles';

const Stack = <E extends StackElementType & ElementType = 'div'>({ as, style, className, ...restProps }: StackProps<E>) => {
    const Component = as || 'div';

    const { ...styleProps } = useStackStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Stack;
