import React, { ElementType } from 'react';
import { TextProps, TextElementType } from './types';
import { useTextStyles } from './useTextStyles';
import { TEXT_DEFAULT_ELEMENT_TYPE } from './const';

const Text = <E extends TextElementType & ElementType = typeof TEXT_DEFAULT_ELEMENT_TYPE>(props: TextProps<E>) => {
    const { as: Component = TEXT_DEFAULT_ELEMENT_TYPE, style, className, ...restProps } = props;

    const { ...styleProps } = useTextStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Text;
