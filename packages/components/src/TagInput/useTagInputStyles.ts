import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { TAG_INPUT_SCOPE_NAME, TAG_INPUT_ROOT_CLASSNAME } from './const';
import { getTagInputStyles } from './styles';

export type UseTagInputStylesProps = WithValidationState & WithStyleProps;
export type UseTagInputStylesReturn = WithRequiredStyleProps;

export const useTagInputStyles = ({ style, className, validationState }: UseTagInputStylesProps): UseTagInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TAG_INPUT_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: TAG_INPUT_SCOPE_NAME,
        styles: getTagInputStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
