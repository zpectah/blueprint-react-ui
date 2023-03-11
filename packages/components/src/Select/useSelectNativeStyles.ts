import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { SELECT_NATIVE_SCOPE_NAME, SELECT_NATIVE_CLASSNAME } from './const';
import { getSelectNativeStyles } from './styles';

export type UseSelectNativeStylesProps = WithValidationState & WithStyleProps;
export type UseSelectNativeStylesReturn = WithRequiredStyleProps;

export const useSelectNativeStyles = ({ style, className, validationState }: UseSelectNativeStylesProps): UseSelectNativeStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SELECT_NATIVE_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: SELECT_NATIVE_SCOPE_NAME,
        styles: getSelectNativeStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
