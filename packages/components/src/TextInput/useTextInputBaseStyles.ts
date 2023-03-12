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
import {
    TEXT_INPUT_BASE_SCOPE_NAME,
    TEXT_INPUT_BASE_CLASSNAME,
    TEXT_INPUT_BASE_MULTILINE_CLASSNAME,
} from './const';
import { getTextInputBaseStyles } from './styles';

export type UseTextInputBaseStylesProps = WithValidationState & WithStyleProps & Pick<TextInputBaseProps, 'multiline'>;
export type UseTextInputBaseStylesReturn = WithRequiredStyleProps;

export const useTextInputBaseStyles = ({ style, className, validationState, multiline }: UseTextInputBaseStylesProps): UseTextInputBaseStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_BASE_CLASSNAME,
        getValidationClassName(validationState),
        multiline ? TEXT_INPUT_BASE_MULTILINE_CLASSNAME : '',
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_BASE_SCOPE_NAME,
        styles: getTextInputBaseStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
