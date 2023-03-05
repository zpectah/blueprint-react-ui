import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps } from '../../../core/src/types';

export type RadioElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'>;

export type RadioBaseProps = RadioElementProps & WithStyleProps;

export type RadioProps = RadioBaseProps & WithChildrenProps & {
    label?: string;
};
