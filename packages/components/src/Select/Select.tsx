import React, { useMemo } from 'react';
import { useSelectStyles } from './useSelectStyles';
import { SelectProps } from './types';
import SelectNative from './SelectNative';
import OptionItem from './OptionItem';

const Select = (props: SelectProps) => {
    const { style, className, options = [], children, validationState, ...restProps } = props;

    const { ...styleProps } = useSelectStyles({ style, className, validationState });

    return useMemo(() => {
        let node = <SelectNative children={children} {...styleProps} {...restProps} />;

        if (options.length > 0) node = (
            <SelectNative {...styleProps} {...restProps}>
                {children}
                {options.map((item) => (
                    <OptionItem {...item} />
                ))}
            </SelectNative>
        );

        return node;
    }, [ options ]);
};

export default Select;
