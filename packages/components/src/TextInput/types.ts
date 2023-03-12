import { ReactNode } from 'react';
import {
    WithStyleProps,
    CombinedInputElementProps,
    CombinedTextareaElementProps,
    WithValidationState,
} from '../../../core/src';

export type TextInputElementProps = CombinedInputElementProps & CombinedTextareaElementProps;

export interface TextInputBaseProps extends TextInputElementProps, WithStyleProps, WithValidationState {
    multiline?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}

export type TextInputProps = TextInputBaseProps;
