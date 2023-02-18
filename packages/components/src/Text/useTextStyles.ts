import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TEXT_SCOPE_NAME } from './const';
import getTextStyles from './styles';

export type UseTextStylesProps = WithStyleProps;
export type UseTextStylesReturn = WithRequiredStyleProps;

export const useTextStyles = ({ style, className }: UseTextStylesProps): UseTextStylesReturn => {
    const { theme } = useThemeContext();

    const { className: updatedClassName } = useClassName({
        classes: [
            TEXT_SCOPE_NAME,
            className,
        ],
    });

    useUniqueStyles({
        id: TEXT_SCOPE_NAME,
        styles: getTextStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
