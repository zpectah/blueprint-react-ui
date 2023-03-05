import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { OPTION_ITEM_SCOPE_NAME } from './const';
import { getOptionItemStyles } from './styles';

export type UseOptionItemStylesProps = WithStyleProps;
export type UseOptionItemStylesReturn = WithRequiredStyleProps;

export const useOptionItemStyles = ({ style, className }: UseOptionItemStylesProps): UseOptionItemStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        OPTION_ITEM_SCOPE_NAME,
        className,
    ]);

    useUniqueStyles({
        id: OPTION_ITEM_SCOPE_NAME,
        styles: getOptionItemStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
