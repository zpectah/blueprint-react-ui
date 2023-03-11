import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
    WithValidationState,
    getValidationClassName,
} from '../../../core/src';
import { TextInputBaseProps } from './types';
import { TEXT_INPUT_BASE_SCOPE_NAME, TEXT_INPUT_BASE_CLASSNAME, TEXT_INPUT_BASE_MULTILINE_CLASSNAME } from './const';
import { getTextInputNativeStyles } from './styles';

export type UseTextInputNativeStylesProps = WithValidationState & WithStyleProps & Pick<TextInputBaseProps, 'multiline'>;
export type UseTextInputNativeStylesReturn = WithRequiredStyleProps;

export const useTextInputBaseStyles = ({ style, className, validationState, multiline }: UseTextInputNativeStylesProps): UseTextInputNativeStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_BASE_CLASSNAME,
        getValidationClassName(validationState),
        multiline && TEXT_INPUT_BASE_MULTILINE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_BASE_SCOPE_NAME,
        styles: getTextInputNativeStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
