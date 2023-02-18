import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TAG_SCOPE_NAME } from './const';
import getTagStyles from './styles';

export type UseTagStylesProps = WithStyleProps;
export type UseTagStylesReturn = WithRequiredStyleProps;

export const useTagStyles = ({ style, className }: UseTagStylesProps): UseTagStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TAG_SCOPE_NAME,
        className,
    ]);

    useUniqueStyles({
        id: TAG_SCOPE_NAME,
        styles: getTagStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
