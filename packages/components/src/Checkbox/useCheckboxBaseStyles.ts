import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { CHECKBOX_BASE_SCOPE_NAME, CHECKBOX_BASE_CLASSNAME } from './const';
import { getCheckboxBaseStyles } from './styles';

export type UseCheckboxBaseStylesProps = WithValidationState & WithStyleProps;
export type UseCheckboxBaseStylesReturn = WithRequiredStyleProps;

export const useCheckboxBaseStyles = ({ style, className, validationState }: UseCheckboxBaseStylesProps): UseCheckboxBaseStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CHECKBOX_BASE_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_BASE_SCOPE_NAME,
        styles: getCheckboxBaseStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
