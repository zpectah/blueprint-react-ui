import {
    WithChildrenProps,
    WithStyleProps,
    DetailedSelectElementProps,
    BaseSelectElementProps,
    DetailedOptionElementProps,
    BaseOptionElementProps,
    DetailedOptionGroupElementProps,
    BaseOptionGroupElementProps,
} from '../../../core/src/types';

export type OptionItemElementProps = BaseOptionElementProps & DetailedOptionElementProps;
export type OptionItemBaseProps = OptionItemElementProps & WithStyleProps;
export type OptionItemProps = OptionItemBaseProps;

export type OptionGroupElementProps = BaseOptionGroupElementProps & DetailedOptionGroupElementProps;
export type OptionGroupBaseProps = OptionGroupElementProps & WithStyleProps;
export type OptionGroupProps = OptionGroupBaseProps;

export type SelectElementProps = BaseSelectElementProps & DetailedSelectElementProps;
export type SelectBaseProps = SelectElementProps & WithChildrenProps & WithStyleProps & {
    options?: OptionItemProps[];
};
export type SelectProps = SelectBaseProps;
