import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
} from '../../../core/src';
import {
    NUMBER_INPUT_SCOPE_NAME,
    NUMBER_INPUT_CLASSNAME,
} from './const';
import { getNumberInputStyles } from './styles';

export type UseNumberInputStylesProps = WithStyleProps;
export type UseNumberInputStylesReturn = WithRequiredStyleProps;

export const useNumberInputStyles = ({ style, className }: UseNumberInputStylesProps): UseNumberInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        NUMBER_INPUT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: NUMBER_INPUT_SCOPE_NAME,
        styles: getNumberInputStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
