import { ReactNode } from 'react';
import {
    WithStyleProps,
    CombinedInputElementProps,
    CombinedTextareaElementProps,
    WithSafeDataAttributeProps,
    WithAriaProps,
    WithValidationState,
    WithChildrenProps,
} from '../../../core/src';
import { TextInputAdornmentPositionKeys } from './enums';

export type TextInputAdornmentPositionType = keyof typeof TextInputAdornmentPositionKeys;

export type TextInputElementProps = CombinedInputElementProps & CombinedTextareaElementProps;

export interface TextInputBaseProps extends TextInputElementProps, WithStyleProps, WithValidationState {
    multiline?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}

export type TextInputProps = TextInputBaseProps;

export interface TextInputAdornmentBaseProps extends WithChildrenProps, WithStyleProps, WithSafeDataAttributeProps, WithAriaProps {
    position: TextInputAdornmentPositionType;
}

export type TextInputAdornmentProps = TextInputAdornmentBaseProps;
