import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
    WithValidationState,
    getValidationClassName,
} from '../../../core/src';
import { TextInputProps } from './types';
import { TEXT_INPUT_SCOPE_NAME, TEXT_INPUT_ROOT_CLASSNAME, TEXT_INPUT_MULTILINE_CLASSNAME } from './const';
import { getTextInputStyles } from './styles';

export type UseTextInputStylesProps = WithValidationState & WithStyleProps & Pick<TextInputProps, 'multiline'>;
export type UseTextInputStylesReturn = WithRequiredStyleProps;

export const useTextInputStyles = ({ style, className, validationState, multiline }: UseTextInputStylesProps): UseTextInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        multiline && TEXT_INPUT_MULTILINE_CLASSNAME,
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
