import React, { ElementType } from 'react';
import { TextProps } from './types';

const Text = <E extends ElementType = 'p'>({ as, ...restProps }: TextProps<E>) => {
    const Component = as || 'p';

    return <Component {...restProps} />;
};

export default Text;
