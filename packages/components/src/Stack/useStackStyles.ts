import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { STACK_SCOPE_NAME, STACK_ROOT_CLASSNAME } from './const';
import { getStackStyles } from './styles';

export type UseStackStylesProps = WithStyleProps;
export type UseStackStylesReturn = WithRequiredStyleProps;

export const useStackStyles = ({ style, className }: UseStackStylesProps): UseStackStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        STACK_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: STACK_SCOPE_NAME,
        styles: getStackStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
