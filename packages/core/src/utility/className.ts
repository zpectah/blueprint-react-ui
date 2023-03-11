import { STATE_CLASSNAME_PREFIX, ValidationStateType } from '../../../core/src';

export const getValidationClassName = (validationState?: ValidationStateType) => validationState && `${STATE_CLASSNAME_PREFIX}${validationState}`;
