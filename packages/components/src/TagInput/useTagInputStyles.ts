import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TAG_INPUT_SCOPE_NAME } from './const';
import getTagInputStyles from './styles';

export type UseTagInputStylesProps = WithStyleProps;
export type UseTagInputStylesReturn = WithRequiredStyleProps;

export const useTagInputStyles = ({ style, className }: UseTagInputStylesProps): UseTagInputStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TAG_INPUT_SCOPE_NAME,
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
