import { WithChildrenProps, WithStyleProps } from '../../../core/src/types';
import { CheckboxElementProps } from '../Checkbox';

export type SwitchBaseProps = CheckboxElementProps & WithStyleProps;

export type SwitchProps = SwitchBaseProps & WithChildrenProps & {
    label?: string;
};
