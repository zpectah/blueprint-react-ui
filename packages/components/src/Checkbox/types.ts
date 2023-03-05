import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps } from '../../../core/src/types';

export type CheckboxElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'>;

export type CheckboxBaseProps = CheckboxElementProps & WithStyleProps;

export type CheckboxProps = CheckboxBaseProps & WithChildrenProps & {
    label?: string;
};
