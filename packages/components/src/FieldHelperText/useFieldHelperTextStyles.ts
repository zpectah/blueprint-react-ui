import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { FIELD_HELPER_TEXT_SCOPE_NAME, FIELD_HELPER_TEXT_ROOT_CLASSNAME } from './const';
import { getFieldHelperTextStyles } from './styles';

export type UseFieldHelperTextStylesProps = WithValidationState & WithStyleProps;
export type UseFieldHelperTextStylesReturn = WithRequiredStyleProps;

export const useFieldHelperTextStyles = ({ style, className, validationState }: UseFieldHelperTextStylesProps): UseFieldHelperTextStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        FIELD_HELPER_TEXT_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: FIELD_HELPER_TEXT_SCOPE_NAME,
        styles: getFieldHelperTextStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
