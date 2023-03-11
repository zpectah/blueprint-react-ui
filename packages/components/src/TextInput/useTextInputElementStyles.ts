import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
    WithValidationState,
    getValidationClassName,
} from '../../../core/src';
import { TextInputElementProps } from './types';
import { TEXT_INPUT_ELEMENT_SCOPE_NAME, TEXT_INPUT_ELEMENT_CLASSNAME, TEXT_INPUT_ELEMENT_MULTILINE_CLASSNAME } from './const';
import { getTextInputElementStyles } from './styles';

export type UseTextInputElementStylesProps = WithValidationState & WithStyleProps & Pick<TextInputElementProps, 'multiline'>;
export type UseTextInputElementStylesReturn = WithRequiredStyleProps;

export const useTextInputElementStyles = ({ style, className, validationState, multiline }: UseTextInputElementStylesProps): UseTextInputElementStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ELEMENT_CLASSNAME,
        getValidationClassName(validationState),
        multiline && TEXT_INPUT_ELEMENT_MULTILINE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_ELEMENT_SCOPE_NAME,
        styles: getTextInputElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
