import React, { ElementType } from 'react';
import { ContainerProps, ContainerElementType } from './types';
import { useContainerStyles } from './useContainerStyles';
import { CONTAINER_DEFAULT_ELEMENT_TYPE, CONTAINER_DEFAULT_MAX_WIDTH } from './const';

const Container = <E extends ContainerElementType & ElementType = typeof CONTAINER_DEFAULT_ELEMENT_TYPE>(props: ContainerProps<E>) => {
    const { as: Component = CONTAINER_DEFAULT_ELEMENT_TYPE, style, className, maxWidth = CONTAINER_DEFAULT_MAX_WIDTH, ...restProps } = props;

    const { ...styleProps } = useContainerStyles({ style, className, maxWidth });

    return <Component {...styleProps} {...restProps} />;
};

export default Container;
