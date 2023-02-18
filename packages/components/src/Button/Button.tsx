import React, { ElementType } from 'react';
import { ButtonProps, ButtonElementType } from './types';
import { useButtonStyles } from './useButtonStyles';

const Button = <E extends ButtonElementType & ElementType = 'button'>({ as, style, className, ...restProps }: ButtonProps<E>) => {
    const Component = as || 'button';

    const { ...styleProps } = useButtonStyles({ style, className });

    return <Component {...styleProps} {...restProps} />;
};

export default Button;
