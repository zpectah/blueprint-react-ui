import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, WithValidationState } from '../../../core/src';

export type RadioElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'> & WithValidationState;

export interface RadioBaseProps extends RadioElementProps, WithStyleProps {
    label?: string;
}

export type RadioProps = RadioBaseProps & WithChildrenProps;
