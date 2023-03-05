import React, { useMemo } from 'react';
import { useOptionItemStyles } from './useOptionItemStyles';
import { OptionItemProps } from './types';

const OptionItem = (props: OptionItemProps) => {
    const { style, className, label, children, ...restProps } = props;

    const { ...styleProps } = useOptionItemStyles({ style, className });

    return useMemo(() => {
        let node = <option children={children} {...styleProps} { ...restProps } />;

        if (label) {
            node = (
                <option {...styleProps} { ...restProps }>
                    {label}
                    {children}
                </option>
            );
        }

        return node;
    },[ label ]);
};

export default OptionItem;
