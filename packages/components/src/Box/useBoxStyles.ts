import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { BOX_SCOPE_NAME, BOX_ROOT_CLASSNAME } from './const';
import getBoxStyles from './styles';

export type UseBlockStylesProps = WithStyleProps;
export type UseBlockStylesReturn = WithRequiredStyleProps;

export const useBoxStyles = ({ style, className }: UseBlockStylesProps): UseBlockStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        BOX_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: BOX_SCOPE_NAME,
        styles: getBoxStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
