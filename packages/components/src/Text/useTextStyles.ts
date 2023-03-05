import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TEXT_SCOPE_NAME, TEXT_ROOT_CLASSNAME } from './const';
import getTextStyles from './styles';

export type UseTextStylesProps = WithStyleProps;
export type UseTextStylesReturn = WithRequiredStyleProps;

export const useTextStyles = ({ style, className }: UseTextStylesProps): UseTextStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_SCOPE_NAME,
        styles: getTextStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
