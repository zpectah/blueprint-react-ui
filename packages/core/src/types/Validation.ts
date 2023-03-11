import { ValidationStateKey } from '../enums';

export type ValidationStateType = keyof typeof ValidationStateKey;

export interface WithValidationState {
    validationState?: ValidationStateType;
}

export interface WithValidationMessage {
    validationMessage?: string;
}
