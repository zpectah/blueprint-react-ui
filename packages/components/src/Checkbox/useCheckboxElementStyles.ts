import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { CHECKBOX_ELEMENT_SCOPE_NAME, CHECKBOX_ELEMENT_CLASSNAME } from './const';
import { getCheckboxElementStyles } from './styles';

export type UseCheckboxElementStylesProps = WithValidationState & WithStyleProps;
export type UseCheckboxElementStylesReturn = WithRequiredStyleProps;

export const useCheckboxElementStyles = ({ style, className, validationState }: UseCheckboxElementStylesProps): UseCheckboxElementStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CHECKBOX_ELEMENT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_ELEMENT_SCOPE_NAME,
        styles: getCheckboxElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
