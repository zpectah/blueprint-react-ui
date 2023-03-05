import React from 'react';
import { useFieldLabelStyles } from './useFieldLabelStyles';
import { FieldLabelProps } from './types';

const FieldLabel = (props: FieldLabelProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useFieldLabelStyles({ style, className });

    return (
        <>FieldLabel</>
    );
};

export default FieldLabel;
