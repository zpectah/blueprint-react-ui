import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { SELECT_SCOPE_NAME, SELECT_ROOT_CLASSNAME } from './const';
import { getSelectStyles } from './styles';

export type UseSelectStylesProps = WithStyleProps;
export type UseSelectStylesReturn = WithRequiredStyleProps;

export const useSelectStyles = ({ style, className }: UseSelectStylesProps): UseSelectStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SELECT_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: SELECT_SCOPE_NAME,
        styles: getSelectStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
