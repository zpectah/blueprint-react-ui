import {
    WithChildrenProps,
    WithStyleProps,
    DetailedSelectElementProps,
    BaseSelectElementProps,
    DetailedOptionElementProps,
    BaseOptionElementProps,
    DetailedOptionGroupElementProps,
    BaseOptionGroupElementProps,
    WithValidationState,
} from '../../../core/src';

export type OptionItemElementProps = BaseOptionElementProps & DetailedOptionElementProps;
export type OptionItemBaseProps = OptionItemElementProps & WithStyleProps;
export type OptionItemProps = OptionItemBaseProps;

export type OptionGroupElementProps = BaseOptionGroupElementProps & DetailedOptionGroupElementProps;
export type OptionGroupBaseProps = OptionGroupElementProps & WithStyleProps;
export type OptionGroupProps = OptionGroupBaseProps;

export type SelectElementProps = BaseSelectElementProps & DetailedSelectElementProps;
export interface SelectBaseProps extends SelectElementProps, WithChildrenProps, WithStyleProps, WithValidationState {
    options?: OptionItemProps[];
}

export type SelectProps = SelectBaseProps;
