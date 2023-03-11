import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { CHECKBOX_GROUP_SCOPE_NAME, CHECKBOX_GROUP_CLASSNAME, CHECKBOX_GROUP_LABEL_CLASSNAME, CHECKBOX_GROUP_BODY_CLASSNAME } from './const';
import { getCheckboxGroupStyles } from './styles';

export type UseCheckboxGroupStylesProps = WithValidationState & WithStyleProps;
export type UseCheckboxGroupStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    body: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useCheckboxGroupStyles = ({ style, className, validationState }: UseCheckboxGroupStylesProps): UseCheckboxGroupStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CHECKBOX_GROUP_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_GROUP_SCOPE_NAME,
        styles: getCheckboxGroupStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: CHECKBOX_GROUP_LABEL_CLASSNAME,
        },
        body: {
            className: CHECKBOX_GROUP_BODY_CLASSNAME,
        },
    };
};
