import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
} from '../../../core/src';
import { BLOCK_SCOPE_NAME, BLOCK_ROOT_CLASSNAME } from './const';
import { getBlockStyles } from './styles';

export type UseBlockStylesProps = WithStyleProps;
export type UseBlockStylesReturn = WithRequiredStyleProps;

export const useBlockStyles = ({ style, className }: UseBlockStylesProps): UseBlockStylesReturn => {
    const { theme } = useThemeContext();
    const updatedClassName = classNamesFromList([
        BLOCK_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: BLOCK_SCOPE_NAME,
        styles: getBlockStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
