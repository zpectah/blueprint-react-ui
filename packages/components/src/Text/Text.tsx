import React, { ElementType } from 'react';
import { TextProps } from './types';
import { useTextStyles } from './useTextStyles';

const Text = <E extends ElementType = 'p'>({ as, style, className, ...restProps }: TextProps<E>) => {
    const Component = as || 'p';

    const { ...styleProps } = useTextStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Text;
