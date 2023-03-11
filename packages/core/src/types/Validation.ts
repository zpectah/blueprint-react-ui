import { ColorValidationKey } from '../enums';

export type ValidationStateType = keyof typeof ColorValidationKey;

export interface WithValidationState {
    validationState?: ValidationStateType;
}

export interface WithValidationMessage {
    validationMessage?: string;
}
