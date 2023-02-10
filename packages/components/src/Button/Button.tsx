import React, { ElementType } from 'react';
import { useThemeContext } from '../../../foundation/src';
import { ButtonProps } from './types';

const Button = <E extends ElementType = 'button'>({ as, ...restProps }: ButtonProps<E>) => {
    const Component = as || 'button';

    const { theme } = useThemeContext();

    return (
        <Component {...restProps} />
    );
};

export default Button;
