import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
    WithValidationState,
    getValidationClassName,
} from '../../../core/src';
import { TEXT_INPUT_SCOPE_NAME, TEXT_INPUT_ROOT_CLASSNAME } from './const';
import { getTextInputStyles } from './styles';

export type UseTextInputStylesProps = WithValidationState & WithStyleProps;
export type UseTextInputStylesReturn = WithRequiredStyleProps;

export const useTextInputStyles = ({ style, className, validationState }: UseTextInputStylesProps): UseTextInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_SCOPE_NAME,
        styles: getTextInputStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
