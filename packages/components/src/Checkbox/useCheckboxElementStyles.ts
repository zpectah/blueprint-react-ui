import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { CHECKBOX_ELEMENT_CLASSNAME } from './const';
import { getCheckboxElementStyles } from './styles';

export type UseCheckboxElementStylesProps = WithStyleProps;
export type UseCheckboxElementStylesReturn = WithRequiredStyleProps;

export const useCheckboxElementStyles = ({ style, className }: UseCheckboxElementStylesProps): UseCheckboxElementStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CHECKBOX_ELEMENT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_ELEMENT_CLASSNAME,
        styles: getCheckboxElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
