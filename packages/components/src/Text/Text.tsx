import React from 'react';
import { TextElementType, TextProps } from './types';

const Text = <C extends TextElementType = 'p'>({ as, ...restProps }: TextProps<C>) => {
    const Component = as || 'p';

    return <Component {...restProps} />;
};

export default Text;
