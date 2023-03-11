import { WithChildrenProps, WithStyleProps, WithValidationState } from '../../../core/src';
import { CheckboxElementProps } from '../Checkbox';

export interface SwitchBaseProps extends CheckboxElementProps, WithStyleProps, WithValidationState {
    label?: string;
}

export type SwitchProps = SwitchBaseProps & WithChildrenProps;
