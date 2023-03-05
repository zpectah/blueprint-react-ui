import React, {useMemo} from 'react';
import { useSelectStyles } from './useSelectStyles';
import { SelectProps } from './types';
import OptionItem from './OptionItem';

const Select = (props: SelectProps) => {
    const { style, className, options = [], children, ...restProps } = props;

    const { ...styleProps } = useSelectStyles({ style, className });

    return useMemo(() => {
        let node = <select children={children} {...styleProps} {...restProps} />;

        if (options.length > 0) node = (
            <select {...styleProps} {...restProps}>
                {children}
                {options.map((item) => (
                    <OptionItem {...item} />
                ))}
            </select>
        );

        return node;
    }, [ options ]);
};

export default Select;
