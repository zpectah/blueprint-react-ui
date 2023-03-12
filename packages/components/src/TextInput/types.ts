import { ReactNode, FormEventHandler, HTMLAttributes } from 'react';
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
export type TextInputElementProps = Omit<(CombinedInputElementProps & CombinedTextareaElementProps), 'ref' | 'onChange'> & {
    onChange?: FormEventHandler<HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
};
export type InputCoreProps = TextInputElementProps & WithStyleProps & WithValidationState;

export interface TextInputBaseProps extends InputCoreProps {
    multiline?: boolean;
}

export type TextInputProps = TextInputBaseProps & {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
};

export interface TextInputAdornmentBaseProps extends WithChildrenProps, WithStyleProps, WithSafeDataAttributeProps, WithAriaProps {
    position: TextInputAdornmentPositionType;
}

export type TextInputAdornmentProps = TextInputAdornmentBaseProps;


export type NumberInputBaseProps = InputCoreProps;

export type NumberInputProps = NumberInputBaseProps;
