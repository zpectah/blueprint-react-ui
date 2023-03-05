import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { FORM_FIELD_SCOPE_NAME } from './const';
import getFormFieldStyles from './styles';

export type UseFormFieldStylesProps = WithStyleProps;
export type UseFormFieldStylesReturn = WithRequiredStyleProps;

export const useFormFieldStyles = ({ style, className }: UseFormFieldStylesProps): UseFormFieldStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        FORM_FIELD_SCOPE_NAME,
        className,
    ]);

    useUniqueStyles({
        id: FORM_FIELD_SCOPE_NAME,
        styles: getFormFieldStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
