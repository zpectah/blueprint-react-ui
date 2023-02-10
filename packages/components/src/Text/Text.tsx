import React, { ElementType } from 'react';
import { useThemeContext } from '../../../foundation/src';
import { TextProps } from './types';

const Text = <E extends ElementType = 'p'>({ as, ...restProps }: TextProps<E>) => {
    const Component = as || 'p';

    const { theme } = useThemeContext();

    return <Component {...restProps} />;
};

export default Text;
