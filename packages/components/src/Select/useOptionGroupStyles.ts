import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { OPTION_GROUP_SCOPE_NAME, OPTION_GROUP_ROOT_CLASSNAME } from './const';
import { getOptionGroupStyles } from './styles';

export type UseOptionGroupStylesProps = WithStyleProps;
export type UseOptionGroupStylesReturn = WithRequiredStyleProps;

export const useOptionGroupStyles = ({ style, className }: UseOptionGroupStylesProps): UseOptionGroupStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        OPTION_GROUP_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: OPTION_GROUP_SCOPE_NAME,
        styles: getOptionGroupStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
