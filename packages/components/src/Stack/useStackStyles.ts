import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { STACK_SCOPE_NAME } from './const';
import getStackStyles from './styles';

export type UseStackStylesProps = WithStyleProps;
export type UseStackStylesReturn = WithRequiredStyleProps;

export const useStackStyles = ({ style, className }: UseStackStylesProps): UseStackStylesReturn => {
    const { theme } = useThemeContext();

    const { className: updatedClassName } = useClassName({
        classes: [
            STACK_SCOPE_NAME,
            className,
        ],
    });

    useUniqueStyles({
        id: STACK_SCOPE_NAME,
        styles: getStackStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
