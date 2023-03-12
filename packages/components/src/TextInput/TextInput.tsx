import React, { useMemo } from 'react';
import { TextInputProps } from './types';
import { useTextInputStyles } from './useTextInputStyles';
import TextInputBase from './TextInputBase';

const TextInput = (props: TextInputProps) => {
    const {
        style,
        className,
        validationState,
        startAdornment,
        endAdornment,
        ...restProps
    } = props;

    const { ...styleProps } = useTextInputStyles({ style, className });

    return useMemo(() => {
        let node = <TextInputBase validationState={validationState} {...styleProps} {...restProps} />;

        if (startAdornment || endAdornment) {
            node = (
                <div>
                    {startAdornment && (
                        <>startAdornment</>
                    )}
                    <TextInputBase validationState={validationState} {...styleProps} {...restProps} />
                    {endAdornment && (
                        <>endAdornment</>
                    )}
                </div>
            );
        }

        return node;
    }, [ startAdornment, endAdornment ]);
};

export default TextInput;
