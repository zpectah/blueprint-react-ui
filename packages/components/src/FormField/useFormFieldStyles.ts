import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { FormFieldProps } from './types';
import { FORM_FIELD_SCOPE_NAME, FORM_FIELD_LABEL_CLASSNAME, FORM_FIELD_INPUT_CLASSNAME, FORM_FIELD_MESSAGE_CLASSNAME } from './const';
import getFormFieldStyles from './styles';

export type UseFormFieldStylesProps = Pick<FormFieldProps, 'labelPosition' | 'validationState'> & WithStyleProps;
export type UseFormFieldStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    input: {
        className: WithRequiredStyleProps['className'];
    };
    message: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useFormFieldStyles = ({ style, className, labelPosition, validationState }: UseFormFieldStylesProps): UseFormFieldStylesReturn => {
    const { theme } = useThemeContext();

    const FORM_FIELD_LABEL_POSITION_CLASSNAME = `${FORM_FIELD_SCOPE_NAME}--${labelPosition}`;
    const FORM_FIELD_VALIDATION_SATE_CLASSNAME = `${FORM_FIELD_SCOPE_NAME}--${validationState}`;

    const updatedClassName = classNamesFromList([
        FORM_FIELD_SCOPE_NAME,
        FORM_FIELD_LABEL_POSITION_CLASSNAME,
        validationState && FORM_FIELD_VALIDATION_SATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: FORM_FIELD_SCOPE_NAME,
        styles: getFormFieldStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: FORM_FIELD_LABEL_CLASSNAME,
        },
        input: {
            className: FORM_FIELD_INPUT_CLASSNAME,
        },
        message: {
            className: FORM_FIELD_MESSAGE_CLASSNAME,
        },
    };
};
