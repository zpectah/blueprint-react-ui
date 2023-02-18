import React, { ElementType } from 'react';
import { ContainerProps, ContainerElementType } from './types';
import { useContainerStyles } from './useContainerStyles';

const Container = <E extends ContainerElementType & ElementType = 'div'>({ as, style, className, ...restProps }: ContainerProps<E>) => {
    const Component = as || 'div';

    const { ...styleProps } = useContainerStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Container;
