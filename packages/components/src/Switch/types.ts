import {
    WithChildrenProps,
    WithHelperText,
    WithStyleProps,
    WithValidationMessage,
    WithValidationState
} from '../../../core/src';
import { CheckboxElementProps } from '../Checkbox';

export interface SwitchBaseProps extends CheckboxElementProps, WithStyleProps, WithValidationState {
    label?: string;
}

export type SwitchProps = SwitchBaseProps & WithChildrenProps;

export interface SwitchGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: SwitchProps[];
    name?: string;
}

export type SwitchGroupProps = SwitchGroupBaseProps;
