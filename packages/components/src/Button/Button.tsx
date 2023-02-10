import React, { ElementType } from 'react';
import { ButtonProps } from './types';

const Button = <E extends ElementType = 'button'>({ as, ...restProps }: ButtonProps<E>) => {
    const Component = as || 'button';

    return (
        <Component {...restProps} />
    );
};

export default Button;
