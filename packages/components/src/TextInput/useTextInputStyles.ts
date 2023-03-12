import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
} from '../../../core/src';
import { TEXT_INPUT_SCOPE_NAME, TEXT_INPUT_ROOT_CLASSNAME } from './const';
import { getTextInputStyles } from './styles';

export type UseTextInputStylesProps = WithStyleProps;
export type UseTextInputStylesReturn = WithRequiredStyleProps;

export const useTextInputStyles = ({ style, className }: UseTextInputStylesProps): UseTextInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ROOT_CLASSNAME,
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
